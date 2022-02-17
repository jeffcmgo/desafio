//define variável para exportar a função para teste
let exporta = module.exports={};

//declaração da variável de entrada
const palavra = "ovo";

//função para gerar todas as substrings da palavra
function geraSubstrings(str) {
    let resultado = [];
  
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            resultado.push(str.slice(i, j));
        }
    }
    return resultado;
}

//função para comparar se as substrings são anagramas entre si
function eAnagrama (a, b) {
    let y = a.split("").sort().join("");
    let z = b.split("").sort().join("");
    return y === z;
}

//função para contar quantas substrings são anagramas
function contaAnagramas(string) {
    let contador = 0;
    let substrings = geraSubstrings(string);

    for(let i = 0; i < substrings.length; i++) {
        for(let j = i+1; j < substrings.length; j++) {
            if(eAnagrama(substrings[i], substrings[j])) {
                contador++;
                //console.log(`Substring na ${substrings[i]} é igual a substring na ${substrings[j]}.`);
            }
        }
    }
    return contador;
}

    //console.log(contaAnagramas(palavra));
    //console.log(geraSubstrings(palavra));

    //exporta a função para teste
    exporta.contaAnagramas = contaAnagramas;