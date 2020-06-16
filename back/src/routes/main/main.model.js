const mongoose = require('mongoose');

const mainSchema = new mongoose.Schema({
  inputValue: String
},
{
  versionKey: false
});

const Main = new mongoose.model('Main', mainSchema);

module.exports = Main;