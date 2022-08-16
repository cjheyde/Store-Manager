const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');
const productController = require('../../../controllers/productController');
const productService = require('../../../services/productService');

describe('Controller - Requisito 01 - lista dos produtos', () => {
  describe('Lista os produtos do bd - /products - getAll', () => {
    describe('Caso de sucesso', () => {
      afterEach(() => {
        sinon.restore();
      })
      it('o array retornado é vazio', async function () {
        const req = {};
        const res = {};

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        const resultExecute = [];
        sinon.stub(productService, 'getAll').resolves(resultExecute);

        await productController.getAll(req, res);

        expect(res.status.calledWith(200)).to.be.equal(true);
        expect(res.json.calledWith([])).to.be.equal(true);
      });
      it('o array retornado é cheio', async function () {
        const req = {};
        const res = {};

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        const resultExecute = [{ id:10, name: 'teste do teste'}];
        sinon.stub(productService, 'getAll').resolves(resultExecute);

        await productController.getAll(req, res);

        expect(res.status.calledWith(200)).to.be.equal(true);
        expect(res.json.calledWith([{ id: 10, name: 'teste do teste' }])).to.be.equal(true);
      });
    });
  });
  describe('Traz os dados do bd de um produto com Id especifico - /products/:id - getById', () => {
    describe('Caso de sucesso', () => {
      afterEach(() => {
        sinon.restore();
      })
      it('o objeto retornado é vazio', async function () {
        const req = {};
        const res = {};

        req.params = {
          id: 10,
        };

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        const resultExecute = null;
        sinon.stub(productService, 'getById').resolves(resultExecute);

        await productController.getById(req, res);

        expect(res.status.calledWith(404)).to.be.equal(true);
        expect(res.json.calledWith({ message: 'Product not found' })).to.be.equal(true);
      });
      it('o objeto retornado é cheio', async function () {
        const req = {};
        const res = {};

        req.params = {
          id: 10,
        };

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        const resultExecute = { id: 10, name: 'teste de teste'};
        sinon.stub(productService, 'getById').resolves(resultExecute);

        await productController.getById(req, res);

        expect(res.status.calledWith(200)).to.be.equal(true);
        expect(res.json.calledWith({ id: 10, name: 'teste de teste' })).to.be.equal(true);
      });
    });
    // describe('Caso de erro', () => {
    //   afterEach(() => {
    //     sinon.restore();
    //   })
    //   it('linhas 23-24 - status 500 - internal server error no try/catch', async function () {
    //     ?

    //     expect(res.status.calledWith(500)).to.be.equal(true);
    //     expect(res.json.calledWith({ message: 'internal server error' })).to.be.equal(true);
    //   });
    // });
  });
});

describe('Controller - Requisito 03 - cria um produto novo no db - /products - add', () => {
  describe('Caso de sucesso', () => {
    afterEach(() => {
      sinon.restore();
    })
    it('retorna um objeto', async function () {
      const req = {};
      const res = {};

      req.body = {
        name: 'teste de teste',
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      const resultExecute = { id: 10, name: 'teste de teste' };
      sinon.stub(productService, 'add').resolves(resultExecute);

      await productController.add(req, res);

      expect(res.status.calledWith(201)).to.be.equal(true);
      expect(res.json.calledWith({ id: 10, name: 'teste de teste' })).to.be.equal(true);
    });
  });
    // describe('Caso de erro', () => {
    //   afterEach(() => {
    //     sinon.restore();
    //   })
    //   it('linhas 35-36 - status 500 - internal server error no try/catch', async function () {
    //     ?

    //     expect(res.status.calledWith(500)).to.be.equal(true);
    //     expect(res.json.calledWith({ message: 'internal server error' })).to.be.equal(true);
    //   });
    // });
});

describe('Controller - Requisito 10 - atualiza um produto existente no db - /products/:id - edit', () => {
  describe('Caso de sucesso', () => {
    afterEach(() => {
      sinon.restore();
    })
    it('retorna um objeto', async function () {
      const req = {};
      const res = {};

      req.params = { id: 10 }
      req.body = {
        name: 'teste alterado',
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      const resultExecute = { id: 10, name: 'teste alterado' };
      sinon.stub(productService, 'edit').resolves(resultExecute);

      await productController.edit(req, res);

      expect(res.status.calledWith(200)).to.be.equal(true);
      expect(res.json.calledWith({ id: 10, name: 'teste alterado' })).to.be.equal(true);
    }); 
    it('o objeto retornado é vazio', async function () {
      const req = {};
      const res = {};

      req.params = { id: 10 }
      req.body = {
        name: 'teste alterado',
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      const resultExecute = null;
      sinon.stub(productService, 'edit').resolves(resultExecute);

      await productController.edit(req, res);

      expect(res.status.calledWith(404)).to.be.equal(true);
      expect(res.json.calledWith({ message: 'Product not found' })).to.be.equal(true);
    });
  });
});
