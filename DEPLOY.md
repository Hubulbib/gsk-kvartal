# Деплой gsk-kvartal.ru

Проект деплоится вручную на арендованный сервер через Docker Compose (Next.js + Nginx + Let's Encrypt). CI/CD (GitHub Actions) и Vercel отключены сознательно — деплой полностью ручной.

Все команды ниже выполняются **на сервере по SSH**, если не указано иное.

## Важно помнить

`nginx/nginx.conf` жёстко ссылается на уже существующие сертификаты:

```
/etc/letsencrypt/live/gsk-kvartal.ru/fullchain.pem
/etc/letsencrypt/live/gsk-kvartal.ru/privkey.pem
```

ACME-челленджа (webroot) в конфиге нет — только редирект 80 → 443. Значит **сертификаты нужно получать до первого запуска nginx-контейнера**, иначе он не поднимется.

`docker-compose.yml` монтирует `/etc/letsencrypt` с хоста в контейнер nginx read-only — пути совпадают с путями в `nginx.conf`, менять ничего не нужно.

Env-переменные проекту не нужны — `process.env` в `src/` не используется.

## 1. Подготовка сервера (один раз)

```bash
sudo apt update && sudo apt install -y docker.io docker-compose-plugin certbot git
sudo systemctl enable --now docker
sudo ufw allow 80/tcp && sudo ufw allow 443/tcp
```

Порт 3000 наружу не публикуется — nextjs общается с nginx только по внутренней docker-сети `gsk-kvartal-network`.

## 2. DNS

A-записи `gsk-kvartal.ru` и `www.gsk-kvartal.ru` должны указывать на IP сервера:

```bash
dig gsk-kvartal.ru +short
```

## 3. Клонировать проект

```bash
git clone https://github.com/hubulbib/gsk-kvartal.git /opt/gsk-kvartal
cd /opt/gsk-kvartal
```

## 4. Получить сертификат до первого запуска стека

Порт 80 на этом шаге ещё свободен — используем standalone-режим certbot:

```bash
sudo certbot certonly --standalone -d gsk-kvartal.ru -d www.gsk-kvartal.ru
```

## 5. Собрать и запустить

```bash
cd /opt/gsk-kvartal
docker compose build
docker compose up -d
```

## 6. Проверка

```bash
docker compose ps
docker compose logs -f nginx
docker compose logs -f nextjs
curl -I https://gsk-kvartal.ru
```

Если nginx падает сразу после старта — почти всегда дело в отсутствующих/неверных путях сертификата.

## 7. Автопродление сертификата

Certbot ставит systemd-таймер (`certbot.timer`), но на продлении нужно освобождать порт 80 — он занят nginx-контейнером. Добавляем hook'и:

```bash
sudo mkdir -p /etc/letsencrypt/renewal-hooks/pre /etc/letsencrypt/renewal-hooks/post

echo '#!/bin/sh
cd /opt/gsk-kvartal && docker compose stop nginx' | sudo tee /etc/letsencrypt/renewal-hooks/pre/stop-nginx.sh
sudo chmod +x /etc/letsencrypt/renewal-hooks/pre/stop-nginx.sh

echo '#!/bin/sh
cd /opt/gsk-kvartal && docker compose start nginx' | sudo tee /etc/letsencrypt/renewal-hooks/post/start-nginx.sh
sudo chmod +x /etc/letsencrypt/renewal-hooks/post/start-nginx.sh
```

Проверить, что таймер активен и что продление отработает без ошибок:

```bash
systemctl status certbot.timer
sudo certbot renew --dry-run
```

## 8. Обновление сайта (редеплой)

CI/CD нет, поэтому после каждого пуша в `master` на сервере вручную:

```bash
cd /opt/gsk-kvartal
git pull origin master
docker compose build
docker compose up -d
docker image prune -f
```
