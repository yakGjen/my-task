const router = require('express').Router();
const Main = require('./main.db');

router
  .route('/')
  .get(async (req, res) => {
    const result = await Main.getData();
    res.json(result);
  })
  .post(async (req, res) => {
    console.log('body:', req.body);
    const result = await Main.postData(req.body);
    res.json(result);
  });

  module.exports = router;