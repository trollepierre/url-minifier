const express = require('express');
const router = express.Router();
const urlService = require('../services/url-service');

router.post('/', (req, res) => {
  urlService.addUrl(req.body.url)
    .then((minifiedUrl) => {
      res.render('minifiedUrl', { minifiedUrl });
    })

});

module.exports = router;
