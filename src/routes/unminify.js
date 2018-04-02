const express = require('express');
const router = express.Router();
const urlService = require('../services/url-service');
const createError = require('http-errors');

router.get('/', (req, res, next) => {
  urlService.getUrl(req.originalUrl)
    .then(minifiedUrl => {
      if (!minifiedUrl) {
        next(createError(404, 'URL not found in the database'));
      } else {
        res.redirect(minifiedUrl)
      }
    })
    .catch(err => {
      next(createError(404, err));
    })
});

module.exports = router;
