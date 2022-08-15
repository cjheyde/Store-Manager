const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');
const connection = require('../../../models/connection');

const productModel = require('../../../models/productModel');

// describe('testagem do connection', () => {
//   afterEach(() => {
//     sinon.restore();
//   })
//   it('linhas 15-19', async function () {
//     ?
//   });
// });

describe('Model - Requisito 01 - lista dos produtos', () => {
  describe('Lista os produtos do bd - /products - getAll', () => {
    describe('Caso de sucesso', () => {
      afterEach(() => {
        sinon.restore();
      })
      it('retorna um array', async function () {
        const resultExecute = [];
        sinon.stub(connection, 'execute').resolves([resultExecute]);

        const result = await productModel.getAll();
        expect(result).to.be.an('array');
      });
      it('o array retornado é vazio', async function () {
        const resultExecute = [];
        sinon.stub(connection, 'execute').resolves([resultExecute]);

        const result = await productModel.getAll();
        expect(result).to.be.empty;
      });
      it('o array retornado é cheio', async function () {
        const resultExecute = [{ id: 10, name: 'teste de teste' }];
        sinon.stub(connection, 'execute').resolves([resultExecute]);

        const result = await productModel.getAll();
        expect(result).to.be.not.empty;
      });
      it('o array retornado contém itens do tipo objeto', async function () {
        const resultExecute = [{ id: 10, name: 'teste de teste' }];
        sinon.stub(connection, 'execute').resolves([resultExecute]);

        const result = await productModel.getAll();
        expect(result[0]).to.be.an('object');
      });
      it('o array retornado contém as propriedades: "id" e "name"', async function () {
        const resultExecute = [{ id: 10, name: 'teste de teste' }];
        sinon.stub(connection, 'execute').resolves([resultExecute]);

        const result = await productModel.getAll();
        expect(result[0]).to.all.keys('name', 'id')
      });
    });
  });
  describe('Traz os dados do bd de um produto com Id especifico - /products/:id - getById', () => {
    describe('Caso de sucesso', () => {
      afterEach(() => {
        sinon.restore();
      })
      it('retorna um objeto', async function () {
        const resultExecute = [{ id: 10, name: 'teste de teste' }];
        sinon.stub(connection, 'execute').resolves([resultExecute]);

        const result = await productModel.getById(10);
        expect(result).to.be.an('object');
      });
      it('o objeto retornado contém as propriedades: "id" e "name"', async function () {
        const resultExecute = [{ id: 10, name: 'teste de teste' }];
        sinon.stub(connection, 'execute').resolves([resultExecute]);

        const result = await productModel.getById(10);
        expect(result).to.all.keys('name', 'id')
      });
    });
    describe('Caso não exista o Id', () => {
      afterEach(() => {
        sinon.restore();
      })
      it('retorna null', async function () {
        const resultExecute = [];
        sinon.stub(connection, 'execute').resolves([resultExecute]);

        const result = await productModel.getById(10);
        expect(result).to.be.null;
      });
    });
  });
});
describe('Model - Requisito 03 - cria um produto novo no db - /products - add', () => {
  describe('Caso de sucesso', () => {
    afterEach(() => {
      sinon.restore();
    })
    it('retorna um objeto', async function () {
      const resultExecute = [{ id:10, name: 'produto teste' }];
      sinon.stub(connection, 'execute').resolves([resultExecute]);

      const result = await productModel.add('produto teste');
      expect(result).to.be.an('object');
    });
    it('o objeto retornado contém as propriedades: "id" e "name"', async function () {
      const resultExecute = [{ id: 10, name: 'teste de teste' }];
      sinon.stub(connection, 'execute').resolves([resultExecute]);

      const result = await productModel.add('produto teste');
      expect(result).to.all.keys('name', 'id')
    });
  });
});