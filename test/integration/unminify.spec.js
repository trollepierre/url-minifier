const { request, expect, sinon } = require('../test-helper');
const app = require('../../app');
const urlService = require('../../src/services/url-service');

describe('Integration | Routes | jobs route', () => {
  beforeEach(() => {
    sinon.stub(urlService, 'getUrl');
  });

  afterEach(() => {
    urlService.getUrl.restore();
  });

  describe('when minified url found', () => {
    beforeEach(() => {
      urlService.getUrl.resolves('http://minifyUrl');
    });

    it('should redirect to minified url', () => {
      // when
      return request(app)
        .get('/api/urls')
        .expect(302);
    });
  });

  describe('when minifiedUrl not found', () => {
    beforeEach(() => {
      urlService.getUrl.resolves(undefined);
    });

    it('should reject a 404', () => {
      // when
      return request(app)
        .get('/error/not/found/url')
        .expect(404);
    });
  });
});
