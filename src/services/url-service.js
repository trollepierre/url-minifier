const { MyUrl } = require('../models/index');
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
const base = alphabet.length;
const config = require('../config');

async function addUrl(url) {
  const createdUrl = await MyUrl.create({ url });
  const encodedId = encode(createdUrl.id);
  return `http://${config.API_URL}/${encodedId}`;
}

async function getUrl(originalUrl) {
const encodedId = originalUrl.slice(1);

  const id = decode(encodedId);
  const savedUrl = await MyUrl.findOne({ where: { id } });
  return savedUrl.url;


}

function encode(id) {
  if (id === 0) {
    return alphabet[0];
  }
  let encodedId = "";

  while (id > 0) {
    encodedId += alphabet[id % base];
    id = parseInt(id / base, 10);
  }
  return encodedId.split("").reverse().join("");
}

function decode(encodedId) {
  let decodedId = 0;
  for (let i = 0; i < encodedId.length; i++) {
    decodedId = decodedId * base + alphabet.indexOf(encodedId[i]);
  }
  return decodedId;
}

module.exports = {
  addUrl,
  getUrl
};
