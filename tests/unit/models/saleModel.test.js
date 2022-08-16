const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');
const connection = require('../../../models/connection');

const saleModel = require('../../../models/saleModel');

describe('Model - testes da camada Models para Vendas', () => {
  describe('Requisito 08 - Lista as vendas do bd - /sales - getAll', () => {
    describe('Caso de sucesso', () => {
      afterEach(() => {
        sinon.restore();
      })
      it('retorna um array', async function () {
        const resultExecute = [];
        sinon.stub(connection, 'execute').resolves([resultExecute]);

        const result = await saleModel.getAll();
        expect(result).to.be.an('array');
      });
      it('o array retornado é vazio', async function () {
        const resultExecute = [];
        sinon.stub(connection, 'execute').resolves([resultExecute]);

        const result = await saleModel.getAll();
        expect(result).to.be.empty;
      });
      it('o array retornado é cheio', async function () {
        const resultExecute = [{ saleId: 10, productId: 5, quantity: 4, date: '2022-08-15T22:36:43.000Z' }];
        sinon.stub(connection, 'execute').resolves([resultExecute]);

        const result = await saleModel.getAll();
        expect(result).to.be.not.empty;
      });
      it('o array retornado contém itens do tipo objeto', async function () {
        const resultExecute = [{ saleId: 10, productId: 5, quantity: 4, date: '2022-08-15T22:36:43.000Z' }];
        sinon.stub(connection, 'execute').resolves([resultExecute]);

        const result = await saleModel.getAll();
        expect(result[0]).to.be.an('object');
      });
      it('o array retornado contém as propriedades: "saleId", "productId", "quantity" e "date"', async function () {
        const resultExecute = [{ saleId: 10, productId: 5, quantity: 4, date: '2022-08-15T22:36:43.000Z' }];
        sinon.stub(connection, 'execute').resolves([resultExecute]);

        const result = await saleModel.getAll();
        expect(result[0]).to.all.keys('saleId', 'productId', 'quantity', 'date')
      });
    });
  });
  describe('Traz os dados do bd de uma venda com Id especifico - /sales/:id - getById', () => {
    describe('Caso de sucesso', () => {
      afterEach(() => {
        sinon.restore();
      })
      it('retorna um array', async function () {
        const resultExecute = [{ productId: 5, quantity: 4, date: '2022-08-15T22:36:43.000Z' }];
        sinon.stub(connection, 'execute').resolves([resultExecute]);

        const result = await saleModel.getById(10);
        expect(result).to.be.an('array');
      });
      it('o array retornado contém as propriedades: "productId", "quantity" e "date"', async function () {
        const resultExecute = [{ productId: 5, quantity: 4, date: '2022-08-15T22:36:43.000Z' }];
        sinon.stub(connection, 'execute').resolves([resultExecute]);

        const result = await saleModel.getById(10);
        expect(result[0]).to.all.keys('productId', 'quantity', 'date')
      });
    });
    describe('Caso não exista o Id', () => {
      afterEach(() => {
        sinon.restore();
      })
      it('retorna null', async function () {
        const resultExecute = [];
        sinon.stub(connection, 'execute').resolves([resultExecute]);

        const result = await saleModel.getById(10);
        expect(result).to.be.null;
      });
    });
});
// describe('Model - Requisito 06 - cria um produto novo no db - /products - add', () => {
//   describe('Caso de sucesso', () => {
//     afterEach(() => {
//       sinon.restore();
//     })
//     it('retorna um objeto', async function () {
//       const resultExecute = [{ id: 10, name: 'produto teste' }];
//       sinon.stub(connection, 'execute').resolves([resultExecute]);

//       const result = await saleModel.add('produto teste');
//       expect(result).to.be.an('object');
//     });
//     it('o objeto retornado contém as propriedades: "id" e "name"', async function () {
//       const resultExecute = [{ id: 10, name: 'teste de teste' }];
//       sinon.stub(connection, 'execute').resolves([resultExecute]);

//       const result = await saleModel.add('produto teste');
//       expect(result).to.all.keys('name', 'id')
//     });
//   });
// });
});
