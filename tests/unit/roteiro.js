const { describe } = require('mocha');

// req.1 - lista dos produtos
// - Lista os produtos do bd
// -- Caso de sucesso
//  --- retorna um array
//  --- o array retornado é vazio
//  --- o array retornado é cheio
//  --- o array retornado contém itens do tipo objeto
//  --- o array retornado contém as propriedades: "id" e "name"
// - Traz os dados do bd de um produto com Id especifico
// -- Caso de sucesso
//  --- retorna um objeto
//  --- o objeto retornado contém as propriedades: "id" e "name"
// -- Caso não exista o Id
//  --- retorna null
describe('Model - Requisito 01 - lista dos produtos', () => {
  describe('Lista os produtos do bd - /products', () => {
    describe('Caso de sucesso', () => {
      it('retorna um array');
      it('o array retornado é vazio');
      it('o array retornado é cheio');
      it('o array retornado contém itens do tipo objeto');
      it('o array retornado contém as propriedades: "id" e "name"');
    });
  });
  describe('Traz os dados do bd de um produto com Id especifico - /products/:id', () => {
    describe('Caso de sucesso', () => {
      it('retorna um objeto');
      it('o objeto retornado contém as propriedades: "id" e "name"');
    });
    describe('Caso não exista o Id', () => {
      it('retorna null');
    });
  });
});

// req.3 - cria um produto novo no db
// - Insere um novo produto no DB
// -- Caso de sucesso
//  --- retorna um objeto
//  --- o objeto retornado contém as propriedades: "id" e "name"
describe('Models - Requisito 03 - cria um produto novo no db - /products - add', () => {
  describe('Caso de sucesso', () => {
    it('retorna um objeto');
    it('o objeto retornado contém as propriedades: "id" e "name"');
  });
});


