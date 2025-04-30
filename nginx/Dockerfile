# Используем официальный образ Nginx
FROM nginx:alpine

# Копируем конфигурацию Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Удаляем дефолтную конфигурацию Nginx
RUN rm -rf /etc/nginx/conf.d/default.conf

# Порт, который будет использовать Nginx
EXPOSE 80