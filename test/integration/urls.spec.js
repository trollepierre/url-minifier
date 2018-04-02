const { request, expect, sinon } = require('../test-helper');
const app = require('../../app');
const urlService = require('../../src/services/url-service');

describe('Integration | Routes | jobs route', () => {
  beforeEach(() => {
    sinon.stub(urlService, 'addUrl');
  });

  afterEach(() => {
    urlService.addUrl.restore();
  });

  it('should return minified url', (done) => {
    // given
    urlService.addUrl.resolves('http://minifyUrl');

    // when
    request(app)
      .post('/api/urls')
      .send({ url: 'http://mylongurl.com' })
      .expect(200, (err, res) => {
        // then
        if (err) {
          done(err);
        }
        expect(urlService.addUrl).to.have.been.called;
        expect(res.text).to.deep.equal(`<!DOCTYPE html>
<html>
  <head>
    <title></title>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1>Votre URL a bien été minifiée !</h1>
<h2>Retrouvez-là ici :</h2>
<a href="http://minifyUrl">http://minifyUrl</a>

  </body>
</html>
`);
        done();
      });
  });
});
