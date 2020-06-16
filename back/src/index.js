const express = require('express');
const cors = require('cors');

const mainRouter = require('./routes/main.router');

const app = express();

app.use(cors());
app.use(express.json());
// app.use((req, res, next) => {
//   //console.log('OKOK', req.body);
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

app.use('/main', mainRouter);

module.exports = app;