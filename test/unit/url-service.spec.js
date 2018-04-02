const { sinon, expect } = require('../test-helper');
const urlService = require('../../src/services/url-service');
const { MyUrl } = require('../../src/models');

describe('Unit | Service | url-service', () => {
  describe('#minify', () => {
    beforeEach(() => {
      sinon.stub(MyUrl, 'create');
    });

    afterEach(() => {
      MyUrl.create.restore();
    });

    it('should call Sequelize Model#create', () => {
      // given
      const urlToMinify = 'http://myurltominify';
      const minifiedUrl = 'http://minifiedUrl.com/AZ';
      const url = {
        id: 1,
        url: minifiedUrl
      };
      MyUrl.create.resolves(url);

      // when
      const promise = urlService.minify(urlToMinify);

      // then

      return promise.then((res) => {
        expect(MyUrl.create).to.have.been.calledWith({url: minifiedUrl});
        expect(res).to.deep.equal(url);
      });
    });
  });
});

