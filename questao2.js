//define variável para exportar a função para teste
let exporta = module.exports={};

//entrada de dados
const senha = "jaJ&4g";
const tamanho = 6;

//função para validação de senha
function validaSenha(p,n){

    //declaração de variáveis principais (RegEx)
    let retorno = false;
    const letrasMaiusculas = /[A-Z]/;
    const letrasMinusculas = /[a-z]/; 
    const numeros = /[0-9]/;
    const caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
    
    //declaração de variáveis auxiliares
    let auxMaiuscula = 0;
    let auxMinuscula = 0;
    let auxNumero = 0;
    let auxEspecial = 0;
    let falta = 0;
    
    //testa se os caracteres da senha atendem aos requisitos
    for(let i = 0; i < p.length; i++) {
        if(letrasMaiusculas.test(p[i])) {
            auxMaiuscula++;
        } else if(letrasMinusculas.test(p[i])) {
            auxMinuscula++;
        } else if(numeros.test(p[i])) {
            auxNumero++;
        } else if(caracteresEspeciais.test(p[i])) {
            auxEspecial++;
        }
    }

    //contabiliza os caracteres obrigatórios ausentes
    if (auxMaiuscula == 0) {
        falta++;
    }
    if (auxMinuscula == 0) {
        falta++;
    }
    if (auxNumero == 0) {
        falta++;
    }
    if (auxEspecial == 0) {
        falta++;
    }

    //testa se todos os caracteres foram preenchidos
    if(p.length < n){
        if((n - p.length) > falta){
            falta = n - p.length;
        } 
    }

    //retorna a quantidade de caracteres a corrigir
    return falta;
}

//console.log(validaSenha(senha,tamanho));

//exporta a função para teste
exporta.validaSenha = validaSenha;