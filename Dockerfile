# Используем официальный образ Node.js
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь проект
COPY . .

# Собираем Next.js-приложение с очисткой кэша
RUN npm run build
RUN rm -rf .next/cache

# Порт, который будет использовать Next.js
EXPOSE 3000

# Команда для запуска приложения
CMD ["npm", "run", "start"]