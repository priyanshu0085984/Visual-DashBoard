const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const HomeRoute = require('./routes/Home');

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use('/',HomeRoute);


module.exports = app;