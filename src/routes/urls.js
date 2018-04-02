const express = require('express');
const router = express.Router();
const urlService = require('../services/url-service');

router.post('/', (req, res) => {
  urlService.addUrl(req.url)
    .then((minifiedUrl) => {
      res.json(minifiedUrl)
    })

});

module.exports = router;
