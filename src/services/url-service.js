const { MyUrl } = require('../models/index');

function minify(url) {
  const urlMinified = 'http://minifiedUrl.com/AZ';
  return MyUrl.create({ url: urlMinified });
}

module.exports = {
  minify,
};
