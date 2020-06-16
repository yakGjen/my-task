const app = require('./index');
const mongoose = require('mongoose');


const mongoPath = 'mongodb+srv://admin:yaks123@rest-node-avlbp.mongodb.net/rss-rest?retryWrites=true&w=majority';

mongoose.connect(mongoPath, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Successfull connection to db');
  // db.dropDatabase();

  app.listen(4200, () => {
    console.log('App is running on http://localhost:4200');
  });
});
