const express = require('express');
const cors = require('cors');

const mainRouter = require('./routes/main/main.router');
const secondRouter = require('./routes/second/second.router');
const thirdRouter = require('./routes/third/third.router');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/main', mainRouter);
app.use('/second', secondRouter);
app.use('/third', thirdRouter);

app.use('*', (req, res) => {
  res.status(404).json('Not found');
})

module.exports = app;