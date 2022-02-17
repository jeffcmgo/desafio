//declaração de variável de tamanho da escada (n x n)
const n = 6;

//loop de construção do degrau
for(let i = 0; i < n; i++) {

    //declaração de variáveis de degrau e passo
    let stair = "";
    let step = 1;

    //loop de construção do passo    
    while(stair.length < n) {
        if(step < (n-i)) {
            stair = `${stair} `;
        } else {
            stair = `${stair}*`;
        }
        step++;
    }

    //imprime a escada com 'n' degraus
    console.log(stair);
}

