const Main = require('./main.model');

Main.create(new Main({inputValue: 'firts value'}));
Main.create(new Main({inputValue: 'second value'}));

const getData = async () => {
  return await Main.find({});
};

const postData = async (data) => {
  return await Main.create(new Main(data));
};

module.exports = {getData, postData};