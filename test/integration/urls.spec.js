const { request, expect, sinon } = require('../test-helper');
const app = require('../../app');
const urlService = require('../../src/services/url-service');

describe('Integration | Routes | jobs route', () => {
  beforeEach(() => {
    sinon.stub(urlService, 'minify');
  });

  afterEach(() => {
    urlService.minify.restore();
  });

  it('should return minified url', (done) => {
    // given
    urlService.minify.resolves('http://minifyUrl');

    // when
    request(app)
      .post('/api/urls')
      .send({ url: 'http://mylongurl.com' })
      .expect(200, (err, res) => {
        // then
        if (err) {
          done(err);
        }
        expect(urlService.minify).to.have.been.called;
        expect(res.body).to.deep.equal('http://minifyUrl');
        done();
      });
  });
});
