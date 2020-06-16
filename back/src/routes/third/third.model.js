const mongoose = require('mongoose');

const thirdSchema = new mongoose.Schema({
  data: String
},
{
  versionKey: false
});

const Third = new mongoose.model('Third', thirdSchema);

module.exports = Third;