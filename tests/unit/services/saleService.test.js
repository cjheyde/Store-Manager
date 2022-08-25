const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');
const saleModel = require('../../../models/saleModel');
const saleService = require('../../../services/saleService');

describe('Service - Sales - testes da camada Services para Vendas', () => {
  describe('Requisito 08 - Lista as vendas do bd - /sales - getAll', () => {
    describe('Caso de sucesso', () => {
      afterEach(() => {
        sinon.restore();
      })
      it('retorna um array', async function () {
        const resultExecute = [];
        sinon.stub(saleModel, 'getAll').resolves([resultExecute]);

        const result = await saleService.getAll();
        expect(result).to.be.an('array');
      });
      it('o array retornado é vazio', async function () {
        const resultExecute = [];
        sinon.stub(saleModel, 'getAll').resolves(resultExecute);

        const result = await saleService.getAll();
        expect(result).to.be.empty;
      });
      it('o array retornado é cheio', async function () {
        const resultExecute = [{ saleId: 10, productId: 5, quantity: 4, date: '2022-08-15T22:36:43.000Z' }];
        sinon.stub(saleModel, 'getAll').resolves([resultExecute]);

        const result = await saleService.getAll();
        expect(result).to.be.not.empty;
      });
      it('o array retornado contém itens do tipo objeto', async function () {
        const resultExecute = [{ saleId: 10, productId: 5, quantity: 4, date: '2022-08-15T22:36:43.000Z' }];
        sinon.stub(saleModel, 'getAll').resolves(resultExecute);

        const result = await saleService.getAll();
        expect(result[0]).to.be.an('object');
      });
      it('o array retornado contém as propriedades: "saleId", "productId", "quantity" e "date"', async function () {
        const resultExecute = [{ saleId: 10, productId: 5, quantity: 4, date: '2022-08-15T22:36:43.000Z' }];
        sinon.stub(saleModel, 'getAll').resolves(resultExecute);

        const result = await saleService.getAll();
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
        sinon.stub(saleModel, 'getById').resolves([resultExecute]);

        const result = await saleService.getById(10);
        expect(result).to.be.an('array');
      });
      it('o array retornado contém as propriedades: "productId", "quantity" e "date"', async function () {
        const resultExecute = [{ productId: 5, quantity: 4, date: '2022-08-15T22:36:43.000Z' }];
        sinon.stub(saleModel, 'getById').resolves(resultExecute);

        const result = await saleService.getById(10);
        expect(result[0]).to.all.keys('productId', 'quantity', 'date')
      });
    });
    describe('Caso não exista o Id', () => {
      afterEach(() => {
        sinon.restore();
      })
      it('retorna null', async function () {
        const resultExecute = null;
        sinon.stub(saleModel, 'getById').resolves(resultExecute);

        const result = await saleService.getById(10);
        expect(result).to.be.null;
      });
    });
  });
describe('Requisito 06 - cria uma venda nova no db - /sales - add', () => {
  describe('Caso de sucesso', () => {
    afterEach(() => {
      sinon.restore();
    })
    it('retorna um objeto', async function () {
      const resultExecute = { "id": 3, "itemsSold": [{ "productId": 1, "quantity": 5 }] };
      sinon.stub(saleModel, 'add').resolves([resultExecute]);

      const result = await saleService.add([{ productId: 1, quantity: 5 }]);
      expect(result).to.be.an('object');
    });
    it('o objeto retornado contém as propriedades: "id" e "itemsSold"', async function () {
      const resultExecute = { "id": 3, "itemsSold": [{ "productId": 1, "quantity": 5 }] };
      sinon.stub(saleModel, 'add').resolves([resultExecute]);

      const result = await saleService.add([{ productId: 1, quantity: 5 }]);
      expect(result).to.all.keys('id', 'itemsSold')
    });
  });
});
  describe('Requisito 14 - deletar uma venda do db - /sales/:id - destroy', () => {
    describe('Caso de sucesso', () => {
      afterEach(() => {
        sinon.restore();
      })
      it('a ação retorna true', async function () {
        const resultExecute = true
        sinon.stub(saleModel, 'destroy').resolves(resultExecute);

        const result = await saleService.destroy(1);
        expect(result).to.be.equal(true);
      });
    });
  });
  describe('Requisito 16 - atualizar uma venda do db - /sales/:id - edit', () => {
    describe('Caso de sucesso', () => {
      afterEach(() => {
        sinon.restore();
      })
      it('a ação retorna true', async function () {
        const resultExecute = true
        sinon.stub(saleModel, 'edit').resolves(resultExecute);

        const result = await saleService.edit(1, { productId: 2, quantity: 60 });
        expect(result).to.be.equal(true);
      });
    });
  });
});