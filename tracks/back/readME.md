# Документация по запуску сервера

Этот файл содержит инструкции о том, как запустить сервер для работы с API для музыкального приложения.

## Шаг 1: Установка зависимостей

Прежде всего, убедитесь, что у вас установлен Node.js и npm (Node Package Manager). Вы можете скачать их с [официального сайта Node.js](https://nodejs.org/).

После установки Node.js, перейдите в корневую папку проекта и выполните следующую команду для установки зависимостей:

```bash
npm install
npm run dev
Теперь, когда сервер запущен, вы можете использовать API для чата. Вот некоторые из доступных эндпоинтов:

POST /users - регистрация (создание) нового пользователя.
{
  "username":"John",
  "password":"password"
  
}
POST /users/sessions.
{
  "username":"John",
  "password":"password"
  
}
POST /track_history
{
  "trackId":1,
  "userId":1
}
Если такой пользователь есть проверить можно в headers
Authorization:"token"
```
