const Main = require('./main.model');

const postData = async (data) => {
  return await Main.create(new Main(data));
};

module.exports = {postData};