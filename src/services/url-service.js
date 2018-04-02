const { MyUrl } = require('../models/index');
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
const base = alphabet.length;

async function addUrl(url) {
  const createdUrl = await MyUrl.create({ url });
  const encodedId = encode(createdUrl.id);
  return `http://minifiedUrl.com/${encodedId}`;
}

function encode(id) {
  if (id === 0) {
    return alphabet[0];
  }
  let encodedString = "";

  while (id > 0) {
    encodedString += alphabet[id % base];
    id = parseInt(id / base, 10);
  }
  return encodedString.split("").reverse().join("");
}

module.exports = {
  addUrl: addUrl,
};
