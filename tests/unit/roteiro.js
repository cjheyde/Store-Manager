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
describe('Requisito 01 - lista dos produtos', () => {
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
describe('Requisito 03 - cria um produto novo no db - /products - add', () => {
  describe('Caso de sucesso', () => {
    it('retorna um objeto');
    it('o objeto retornado contém as propriedades: "id" e "name"');
  });
});

// Requisito nao testado como parte dos testes das camadas, pois está no middleware
// req.4 - cria validações para o novo produto
// - Insere um novo produto no DB
// -- Caso de sucesso
//  --- retorna um objeto
//  --- o objeto retornado contém as propriedades: "id" e "name"
describe('Requisito 04 - cria validações para o novo produto - /products - add', () => {
  describe('Caso de sucesso', () => {
    it('o campo "name" é informado');
    it('o campo "name" tem 5 a mais caracteres');
  });
  describe('Caso de fracasso', () => {
    it('o campo "name" não é informado');
    it('o campo "name" tem menos de 5 caracteres');
  });
});

// req.8 - lista das vendas
// - Lista as vendas do bd
// -- Caso de sucesso
//  --- retorna um array
//  --- o array retornado é vazio
//  --- o array retornado é cheio
//  --- o array retornado contém itens do tipo objeto
//  --- o array retornado contém as propriedades: "saleId", "productId", "quantity" e "date"
// - Traz os dados do bd de uma venda com Id especifico
// -- Caso de sucesso
//  --- retorna um array
//  --- o array retornado contém as propriedades: "productId", "quantity" e "date"
// -- Caso não exista o Id
//  --- retorna null
describe('Requisito 08 - lista das vendas', () => {
  describe('Lista as vendas do bd - /sales', () => {
    describe('Caso de sucesso', () => {
      it('retorna um array');
      it('o array retornado é vazio');
      it('o array retornado é cheio');
      it('o array retornado contém itens do tipo objeto');
      it('o array retornado contém as propriedades: "saleId", "productId", "quantity" e "date"');
    });
  });
  describe('Traz os dados do bd de uma venda com Id especifico - /sales/:id', () => {
    describe('Caso de sucesso', () => {
      it('retorna um objeto');
      it('o objeto retornado contém as propriedades: "productId", "quantity" e "date"');
    });
    describe('Caso não exista o Id', () => {
      it('retorna null');
    });
  });
});

// req.10 - 
// - atualiza um produto existente no db
// -- Caso de sucesso
//  --- retorna um objeto
//  --- o objeto retornado contém as propriedades: "id" e "name"
// -- Caso não exista o Id
//  --- retorna null
//  --- retorna mensagem de Product not found
describe('Requisito 10 - atualiza um produto existente no db - /products/:id - edit', () => {
  describe('Caso de sucesso', () => {
    it('retorna um objeto');
    it('o objeto retornado contém as propriedades: "id" e "name"');
    it('rotorna status: 200');
    it('rotorna objeto alterado: {id: , Name');
  });
  describe('Caso não exista o Id', () => {
    it('retorna null');
    it('rotorna status: 404');
    it('rotorna mensagem: "Product not found"');
  });
});