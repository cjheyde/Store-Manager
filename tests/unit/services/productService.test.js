const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');
const productService = require('../../../services/productService');
const productModel = require('../../../models/productModel');

describe('Requisito 01 - lista dos produtos', () => {
  describe('Lista os produtos do bd - /products - getAll', () => {
    describe('Caso de sucesso', () => {
      afterEach(() => {
        sinon.restore();
      })
      it('retorna um array', async function () {
        const resultExecute = [];
        sinon.stub(productModel, 'getAll').resolves([resultExecute]);

        const result = await productService.getAll();
        expect(result).to.be.an('array');
      });
      it('o array retornado é vazio', async function () {
        const resultExecute = [];
        sinon.stub(productModel, 'getAll').resolves([resultExecute]);

        const result = await productService.getAll();
        expect(result).to.be.empty;
      });
      it('o array retornado é cheio', async function () {
        const resultExecute = [{ id: 10, name: 'teste de teste' }];
        sinon.stub(productModel, 'getAll').resolves([resultExecute]);

        const result = await productService.getAll();
        expect(result).to.be.not.empty;
      });
      it('o array retornado contém itens do tipo objeto', async function () {
        const resultExecute = [{ id: 10, name: 'teste de teste' }];
        sinon.stub(productModel, 'getAll').resolves([resultExecute]);

        const result = await productService.getAll();
        expect(result[0]).to.be.an('object');
      });
      it('o array retornado contém as propriedades: "id" e "name"', async function () {
        const resultExecute = [{ id: 10, name: 'teste de teste' }];
        sinon.stub(productModel, 'getAll').resolves([resultExecute]);

        const result = await productService.getAll();
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
        sinon.stub(productModel, 'getAll').resolves([resultExecute]);

        const result = await productService.getById(10);
        expect(result).to.be.an('object');
      });
      it('o objeto retornado contém as propriedades: "id" e "name"', async function () {
        const resultExecute = [{ id: 10, name: 'teste de teste' }];
        sinon.stub(productModel, 'getAll').resolves([resultExecute]);

        const result = await productService.getById();
        expect(result).to.all.keys('name', 'id')
      });
    });
    describe('Caso não exista o Id', () => {
      afterEach(() => {
        sinon.restore();
      })
      it('retorna null', async function () {
        const resultExecute = [];
        sinon.stub(productModel, 'getAll').resolves([resultExecute]);

        const result = await productService.getById(10);
        expect(result).to.be.null;
      });
    });
  });
});