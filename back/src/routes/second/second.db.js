const Second = require('./second.model');

Second.create(new Second({data: 'Hello from a second route'}));
Second.create(new Second({data: 'Another hello from a second route'}));

const getData = async () => {
  return await Second.find({});
};

module.exports = {getData};