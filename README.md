# URL Minifier

A URL Minifier using Node.js/Express + SQLite

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```
git clone git@github.com:trollepierre/url-minifier.git
```

### Installing

```
yarn
```

### Launch the server

```
yarn start
```

## Running the tests

```
yarn test
```

## Deployment

... in progress

## Understand

It is a basic Express project where the *app.js* file, calls the routes :

- GET / - index.js - the form
- POST /api/urls - urls.js - to post an url to minify and to get the minified link
- GET /* - unminify.js - when getting the minified link, the server redirects user to the original url

Sequelize is used for managing the models of SQLite

.env is used to config the API_URL

Supertest/Sinon/Chai/Mocha are used in the test

Views are managed in Handlebars

## Author

* **Pierre TROLLE** [GitHub](https://github.com/trollepierre)