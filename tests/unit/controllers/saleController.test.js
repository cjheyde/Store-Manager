const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');
const saleController = require('../../../controllers/saleController');
const saleService = require('../../../services/saleService');

describe('Controller - testes da camada Contollers para vendas', () => {
  describe('Requisito 08 - Lista as vendas do bd - /sales - getAll', () => {
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
        sinon.stub(saleService, 'getAll').resolves(resultExecute);

        await saleController.getAll(req, res);

        expect(res.status.calledWith(200)).to.be.equal(true);
        expect(res.json.calledWith([])).to.be.equal(true);
      });
      it('o array retornado é cheio', async function () {
        const req = {};
        const res = {};

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        const resultExecute = [{ saleId: 10, productId: 5, quantity: 4, date: '2022-08-15T22:36:43.000Z' }];
        sinon.stub(saleService, 'getAll').resolves(resultExecute);

        await saleController.getAll(req, res);

        expect(res.status.calledWith(200)).to.be.equal(true);
        expect(res.json.calledWith([{ saleId: 10, productId: 5, quantity: 4, date: '2022-08-15T22:36:43.000Z' }])).to.be.equal(true);
      });
    });

    describe('Traz os dados do bd de uma venda com Id especifico - /sales/:id - getById', () => {
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
        sinon.stub(saleService, 'getById').resolves(resultExecute);

        await saleController.getById(req, res);

        expect(res.status.calledWith(404)).to.be.equal(true);
        expect(res.json.calledWith({ message: 'Sale not found' })).to.be.equal(true);
      });
      it('o objeto retornado é cheio', async function () {
        const req = {};
        const res = {};

        req.params = {
          id: 10,
        };

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        const resultExecute = { productId: 5, quantity: 4, date: '2022-08-15T22:36:43.000Z' };
        sinon.stub(saleService, 'getById').resolves(resultExecute);

        await saleController.getById(req, res);

        expect(res.status.calledWith(200)).to.be.equal(true);
        expect(res.json.calledWith({ productId: 5, quantity: 4, date: '2022-08-15T22:36:43.000Z' })).to.be.equal(true);
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

// describe('Controller - Requisito 06 - cria uma venda nova no db - /sales - add', () => {
//   describe('Caso de sucesso', () => {
//     afterEach(() => {
//       sinon.restore();
//     })
//     it('retorna um objeto', async function () {
//       const req = {};
//       const res = {};

//       req.body = {
//         name: 'reste de teste',
//       };

//       res.status = sinon.stub().returns(res);
//       res.json = sinon.stub().returns();

//       const resultExecute = {
//         productId: 5, quantity: 4, date: '2022-08-15T22:36:43.000Z'
//       };
//       sinon.stub(saleService, 'add').resolves(resultExecute);

//       await saleController.add(req, res);

//       expect(res.status.calledWith(201)).to.be.equal(true);
//       expect(res.json.calledWith({ id: 10, name: 'teste de teste' })).to.be.equal(true);
//     });
//   });
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
// });
});