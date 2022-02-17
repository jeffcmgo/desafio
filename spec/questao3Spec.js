let app = require("../questao3.js");

describe("contaAnagramas", function() {
    it("Retorna 2 quando a palavra for 'ovo'", function() {
      expect(app.contaAnagramas("ovo")).toBe(2);
    });
    it("Retorna 3 quando a palavra for 'ifailuhkqq'", function() {
        expect(app.contaAnagramas("ifailuhkqq")).toBe(3);
    });
    it("Retorna 12 quando a palavra for 'arara'", function() {
      expect(app.contaAnagramas("arara")).toBe(12);
    });
    it("Retorna 1325 quando a palavra for 'luza rocelina a namorada do manuel leu na moda da romana anil e cor azul'", function() {
        expect(app.contaAnagramas("luza rocelina a namorada do manuel leu na moda da romana anil e cor azul")).toBe(1325);
    });
});