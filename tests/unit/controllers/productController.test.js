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
        // expect(res.status.calledWith([])).to.be.equal(true);
        // expect(res.status.calledOnce).to.be.true;
      });
      // it('o array retornado é cheio', async function () {
      //   const req = {};
      //   const res = {};

      //   res.status = sinon.stub().returns(res);
      //   res.json = sinon.stub().returns();

      //   const resultExecute = [];
      //   sinon.stub(productService, 'getAll').resolves(resultExecute);

      //   await productController.getAll(req, res);
      // });
    });
  });
  // describe('Traz os dados do bd de um produto com Id especifico - /products/:id - getById', () => {
  //   describe('Caso de sucesso', () => {
  //     afterEach(() => {
  //       sinon.restore();
  //     })
  //     it('o objeto retornado é vazio', async function () {
  //       const req = {};
  //       const res = {};

  //       res.status = sinon.stub().returns(res);
  //       res.json = sinon.stub().returns();

  //       const resultExecute = [];
  //       sinon.stub(productService, 'getById').resolves(resultExecute);

  //       await productController.getById(req, res);

  //       expect(res.status.calledWith(200)).to.be.equal(true);
  //       expect(res.status.calledWith(200)).to.be.equal(true);
  //       expect(res.status.calledWith(200)).to.be.equal(true);
  //     });
  //   });
  // });
});
