const express = require('express');
const app = express();
ejsLayouts = require('express-ejs-layouts');
const PORT = 3001;
const router = express.Router();

app.set('view engine', 'ejs');
app.use(ejsLayouts);

const indexRouter = require('./routes/index');

app.use('/', indexRouter);

app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
  console.log('Server is running on ' + PORT);
});
