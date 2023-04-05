let tabuleiro = [
    [4,3,2,5,6,2,3,4],
    [1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,1],
    [4,3,2,5,6,2,3,4]
]

let vazio = 0;
let peao = 1;
let bispo = 2;
let cavalo = 3;
let torre = 4;
let rainha = 5;
let rei = 6;

let quantidadePeao = 0;
let quantidadeBispo = 0;
let quantidadeCavalo = 0;
let quantidadeTorre = 0;
let quantidadeRainha = 0;
let quantidadeRei = 0;
let quantidadeVazio = 0;

let linha = tabuleiro.length
let coluna = tabuleiro[0].length


for (let i = 0; i < linha; i++){
    for (let j = 0; j < coluna; j++){

        while ( peao == tabuleiro[i][j]){
            quantidadePeao++;
            break;
        }

        while ( bispo == tabuleiro[i][j]){
            quantidadeBispo++;
            break;
        }

        while ( cavalo == tabuleiro[i][j]){
            quantidadeCavalo++;
            break;
        }

        while ( torre == tabuleiro[i][j]){
            quantidadeTorre++;
            break;
        }
        while ( rainha == tabuleiro[i][j]){
            quantidadeRainha++;
            break;
        }
        while ( rei == tabuleiro[i][j]){
            quantidadeRei++;
            break;
        }
        while ( vazio == tabuleiro[i][j]){
            quantidadeVazio++;
            break;
        }
    }
}

console.log("Peão:" + quantidadePeao);
console.log("Bispo:" + quantidadeBispo);
console.log("Cavalo:" + quantidadeCavalo);
console.log("Torre:" + quantidadeTorre);
console.log("Rainha:" + quantidadeRainha);
console.log("Rei:" + quantidadeRei);
console.log("Vazio:" + quantidadeVazio);
