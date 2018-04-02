require('dotenv').config();

function config() {
  const APP_ENV = {
    API_URL: process.env.API_URL,
  };
  if (process.env.NODE_ENV === 'test') {
    APP_ENV.API_URL = 'localhost:3000';
  }

  return APP_ENV;
}

module.exports = config();
