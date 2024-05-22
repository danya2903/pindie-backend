// app.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');

const apiRouter = require('./routes/apiRouter');

const pagesRouter = require('./routes/pages');

const connectToDatabase = require('./database/connect');
const { cors } = require('./middlewares/cors');

const PORT = 3001;
const app = express();

connectToDatabase();

// Импорты и инициализация приложения
app.use(
  cors,
  cookieParser(),
  bodyParser.json(),
  pagesRouter,
  apiRouter,
  express.static(path.join(__dirname, "public"))
);

// Запуск приложения

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
})