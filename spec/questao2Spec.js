let app = require("../questao2.js");

describe("validaSenha", function() {
    it("Retorna 0 quando a senha preenche os requisitos", function() {
      expect(app.validaSenha("Jeff%5",6)).toBe(0);
    });
    it("Retorna 1 quando falta um número", function() {
        expect(app.validaSenha("Jeff%s",6)).toBe(1);
    });
    it("Retorna 2 quando falta um número e um caractere especial", function() {
      expect(app.validaSenha("Jeffhs",6)).toBe(2);
    });
    it("Retorna 3 quando falta um número, um caractere especial, e uma letra maiúscula", function() {
      expect(app.validaSenha("jeffhs",6)).toBe(3);
    });
    it("Retorna 4 quando falta um número, um caractere especial, uma letra maiúscula e um dígito", function() {
      expect(app.validaSenha("effhs",6)).toBe(3);
    });
    it("Retorna 6 quando nenhum dígito foi preenchido", function() {
      expect(app.validaSenha("",6)).toBe(6);
    });
});