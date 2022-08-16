const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');
const productService = require('../../../services/productService');
const productModel = require('../../../models/productModel');

describe('Service - Requisito 01 - lista dos produtos', () => {
  describe('Lista os produtos do bd - /products - getAll', () => {
    describe('Caso de sucesso', () => {
      afterEach(() => {
        sinon.restore();
      })
      it('retorna um array', async function () {
        const resultExecute = [];
        sinon.stub(productModel, 'getAll').resolves(resultExecute);

        const result = await productService.getAll();
        expect(result).to.be.an('array');
      });
      it('o array retornado é vazio', async function () {
        const resultExecute = [];
        sinon.stub(productModel, 'getAll').resolves(resultExecute);

        const result = await productService.getAll();
        expect(result).to.be.empty;
      });
      it('o array retornado é cheio', async function () {
        const resultExecute = [{ id: 10, name: 'teste de teste' }];
        sinon.stub(productModel, 'getAll').resolves(resultExecute);

        const result = await productService.getAll();
        expect(result).to.be.not.empty;
      });
      it('o array retornado contém itens do tipo objeto', async function () {
        const resultExecute = [{ id: 10, name: 'teste de teste' }];
        sinon.stub(productModel, 'getAll').resolves(resultExecute);

        const result = await productService.getAll();
        expect(result[0]).to.be.an('object');
      });
      it('o array retornado contém as propriedades: "id" e "name"', async function () {
        const resultExecute = { id: 10, name: 'teste de teste' };
        sinon.stub(productModel, 'getAll').resolves(resultExecute);

        const result = await productService.getAll();
        expect(result).to.all.keys('name', 'id')
      });
    });
  });
  describe('Traz os dados do bd de um produto com Id especifico - /products/:id - getById', () => {
    describe('Caso de sucesso', () => {
      afterEach(() => {
        sinon.restore();
      })
      it('retorna um objeto', async function () {
        const resultExecute = { id: 10, name: 'teste de teste' };
        sinon.stub(productModel, 'getById').resolves(resultExecute);

        const result = await productService.getById(10);
        expect(result).to.be.an('object');
      });
      it('o objeto retornado contém as propriedades: "id" e "name"', async function () {
        const resultExecute = { id: 10, name: 'teste de teste' };
        sinon.stub(productModel, 'getById').resolves(resultExecute);

        const result = await productService.getById(10);
        expect(result).to.all.keys('name', 'id')
      });
    });
    describe('Caso não exista o Id', () => {
      afterEach(() => {
        sinon.restore();
      })
      it('retorna null', async function () {
        const resultExecute = null;
        sinon.stub(productModel, 'getById').resolves(resultExecute);

        const result = await productService.getById(11);
        expect(result).to.be.null;
      });
    });
  });
});
describe('Service - Requisito 03 - cria um produto novo no db - /products - add', () => {
  describe('Caso de sucesso', () => {
    afterEach(() => {
      sinon.restore();
    })
    it('retorna um objeto', async function () {
      const resultExecute = { id: 10, name: 'produto teste' };
      sinon.stub(productModel, 'add').resolves(resultExecute);

      const result = await productService.add('produto teste');
      expect(result).to.be.an('object');
    });
    it('o objeto retornado contém as propriedades: "id" e "name"', async function () {
      const resultExecute = { id: 10, name: 'teste de teste' };
      sinon.stub(productModel, 'add').resolves(resultExecute);

      const result = await productService.add('produto teste');
      expect(result).to.all.keys('name', 'id')
    });
  });
});

describe('Service - Requisito 10 - atualiza um produto existente no db - /products/:id - edit', () => {
  describe('Caso de sucesso', () => {
    afterEach(() => {
      sinon.restore();
    })
    it('retorna um booleano', async function () {
      const resultExecute = { id: 1, name: 'teste alterado' };
      sinon.stub(productModel, 'edit').resolves([resultExecute]);

      const result = await productService.edit({ name: 'teste alterado', id: 1 });
      expect(result).to.be.a('boolean');
    });
    it('o booleano retornado deve ser true', async function () {
      const resultExecute = true;
      sinon.stub(productModel, 'edit').resolves([resultExecute]);

      const result = await productService.edit({ name: 'teste alterado', id: 10 });
      expect(result).to.be.equal(true)
    });
  });
  // describe('Caso não exista o Id', () => {
  //   afterEach(() => {
  //     sinon.restore();
  //   })
  //   it('retorna o booleano false', async function () {
  //     const resultExecute = false;
  //     sinon.stub(productModel, 'edit').resolves(resultExecute);

  //     const result = await productService.edit({ id: 12, name: 'teste alterado' });
  //     expect(result).to.be.equal(false);
  //   });
  // });
});
