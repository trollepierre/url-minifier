const { sinon, expect } = require('../test-helper');
const urlService = require('../../src/services/url-service');
const { MyUrl } = require('../../src/models');

describe('Unit | Service | url-service', () => {
  describe('#addUrl', () => {
    beforeEach(() => {
      sinon.stub(MyUrl, 'create');
    });

    afterEach(() => {
      MyUrl.create.restore();
    });

    it('should call Sequelize Model#create', async () => {
      // given
      const urlToMinify = 'http://myurltominify';
      const minifiedUrl = 'http://minifiedUrl.com/AZ';
      const url = {
        id: 1,
        url: minifiedUrl
      };
      MyUrl.create.resolves(url);

      // when
      const res = await urlService.addUrl(urlToMinify);

      // then
      expect(MyUrl.create).to.have.been.calledWith({ url: urlToMinify });
      expect(res).to.deep.equal(`http://${process.env.API_URL}/b`);
    });
  });

  describe('#getUrl', () => {
    beforeEach(() => {
      sinon.stub(MyUrl, 'findAll');
    });

    afterEach(() => {
      MyUrl.findAll.restore();
    });

    it('should call Sequelize Model#findAll', async () => {
      // given
      const encodedId = 'b';
      const minifiedUrl = 'http://minifiedUrl.com/AZ';
      const url = {
        id: 1,
        url: minifiedUrl
      };
      MyUrl.findAll.resolves(url);

      // when
      const res = await urlService.getUrl(encodedId);

      // then
      expect(MyUrl.findAll).to.have.been.calledWith({ where: {id:1} });
      expect(res).to.deep.equal(minifiedUrl);
    });
  });
});

