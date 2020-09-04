const express = require('express'),
  path = require('path'),
  logger = require('morgan'),
  hbs = require('express-handlebars');

const app = module.exports = express();

app.set('views', path.join(__dirname, './views'));
app.engine('.hbs', hbs({
  defaultLayout: 'template',
  layoutsDir: path.join(__dirname, './views/layout'),
  partialsDir: path.join(__dirname, './views/partials'),
  extname: '.hbs'
}));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './public')));

app.use('/', require('./routes/index'));

app.listen(5000, () => {
  console.log('Servidor escuchando en el puerto: 5000')
});