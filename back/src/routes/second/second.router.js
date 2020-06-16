const router = require('express').Router();
const Second = require('./second.db');

router
  .route('/')
  .get(async (req, res) => {
    const result = await Second.getData();
    res.json(result);
  });

  module.exports = router;