const express = require('express');
const router = express.Router();
const urlService = require('../services/url-service');

router.post('/', (req, res, next) => {
  urlService.addUrl(req.body.url)
    .then((minifiedUrl) => {
      res.render('minifiedUrl', { minifiedUrl });
    })
    .catch(err => {
      next(createError(404, err));
    })

});

module.exports = router;
