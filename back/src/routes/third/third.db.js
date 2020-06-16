const Third = require('./third.model');

Third.create(new Third({data: 'Hello from a third route'}));
Third.create(new Third({data: 'Another hello from a third route'}));

const getData = async () => {
  return await Third.find({});
};

module.exports = {getData};