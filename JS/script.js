let qtdeCartas = Number(prompt("Com quantas cartas você deseja jogar?"));
let cartas = [
    "imagens/bobrossparrot.gif", 
    "imagens/explodyparrot.gif", 
    "imagens/fiestaparrot.gif", 
    "imagens/metalparrot.gif", 
    "imagens/revertitparrot.gif", 
    "imagens/tripletsparrot.gif", 
    "imagens/unicornparrot.gif",
];
let primeiraCartaEscolhida = null;
let numeroJogadas = 0;

while(qtdeCartas % 2 !== 0 || qtdeCartas > 14 || qtdeCartas < 4){
    alert("[ERRO!!!] Escolha um número par entre 4 e 14.")
    qtdeCartas = Number(prompt("Com quantas cartas você deseja jogar?"));
}

let cartasComPares = cartas.slice(0, qtdeCartas / 2);
cartasComPares = [...cartasComPares, ...cartasComPares]; 
cartasComPares.sort(() => Math.random() - 0.5);

function jogar() {
    let contador = 0;
    let main = document.querySelector(".div")
    let carta;
            
    while(contador < qtdeCartas){
        carta = `
            <div class="card" onclick="clicou(this)" >
                <div class="front-face face">
                    <img src="imagens/back.png" alt="">
                </div>
                <div class="back-face face">
                    <img src= "${cartasComPares[contador]}" alt="">
                </div>
            </div>
        `;

        main.innerHTML += carta;
        contador++;
    }
}


function clicou(carta) {
    if (carta.classList.contains("clicou") || carta.classList.contains("acertada")) {
        return;
    }

    carta.classList.add("clicou");
    numeroJogadas++;

    if (primeiraCartaEscolhida === null) {
        primeiraCartaEscolhida = carta;
    } else {
        if (primeiraCartaEscolhida !== carta && primeiraCartaEscolhida.innerHTML === carta.innerHTML) {
        
            primeiraCartaEscolhida.classList.add("acertada");
            carta.classList.add("acertada");
            primeiraCartaEscolhida = null;
        } else {
            
            setTimeout(() => {
                primeiraCartaEscolhida.classList.remove("clicou");
                carta.classList.remove("clicou");
                primeiraCartaEscolhida = null;
            }, 1000);
        }
    }


    if (document.querySelectorAll(".acertada").length === document.querySelectorAll(".card").length) {
        alert(`Você ganhou em ${numeroJogadas} jogadas!`);
    }
}

jogar();


