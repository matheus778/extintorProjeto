const express = require('express');
const routes = require('./router');
const path = require('path');
const { engine } = require('express-handlebars');
const { connection } = require('./database/connection');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes)

app.engine('handlebars', engine({ defaultLayout: false }));
app.set('view engine', 'handlebars');
app.set('views', path.resolve(__dirname + '/views'));
app.use(express.static(path.resolve(__dirname + '/public')));

app.listen('3333', () => {
  console.log('aplicação rodando... 🚀');
});


(async () => {
  await connection.sync()
})()