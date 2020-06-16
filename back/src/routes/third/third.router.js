const router = require('express').Router();
const Third = require('./third.db');

router
  .route('/')
  .get(async (req, res) => {
    const result = await Third.getData();
    res.json(result);
  });

  module.exports = router;