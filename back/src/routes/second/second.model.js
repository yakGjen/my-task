const mongoose = require('mongoose');

const secondSchema = new mongoose.Schema({
  data: String
},
{
  versionKey: false
});

const Second = new mongoose.model('Second', secondSchema);

module.exports = Second;