const router = require('express').Router();
const Main = require('./main.db');

router
  .route('/')
  .post(async (req, res) => {
    console.log('body:', req.body);
    const result = await Main.postData(req.body);
    res.json(result);
  });

  module.exports = router;