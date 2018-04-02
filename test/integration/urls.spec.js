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
        expect(res.body).to.deep.equal('http://minifyUrl');
        done();
      });
  });
});
