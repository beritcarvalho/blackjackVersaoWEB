
function valorAleatorio() {
    min = Math.ceil(1);
    max = Math.floor(13);
    var aleatorio = Math.floor(Math.random() * (max - min)) + min;
    return aleatorio;
}

function iniciar() {
    document.getElementById("btn_jogador_1").disabled = false;
    document.getElementById("btn_iniciar").disabled = true;

}

function iniciar() {
    document.getElementById("btn_jogador_1").disabled = false;
    document.getElementById("btn_iniciar").disabled = true;

}

function ResultadoFinal() {
    /*

                jogador 1   x   jogador 2   resultado
                <= 21           <= 21       maior ponto ganha   REGRA 1
                > 21            <= 21       jogador 2 ganha     REGRA 2
                <= 21           > 21        jogador 1 ganha     REGRA 3
                > 21            > 21        2 perderam          REGRA 4
                jogador 2       jogador 1   EMPATE              REGRA 5

            */


    if (pontosP1 > pontosP2 && pontosP1 <= 21) {
        document.getElementById("jogador1").textContent = pontosP1 + " - GANHOU!";
    }
    else if (pontosP1 < pontosP2 && pontosP2 <= 21) {
        document.getElementById("jogador2").textContent = pontosP2 + " - GANHOU!";

    }
    else if (pontosP1 > pontosP2 && pontosP2 > 21) {
        document.getElementById("jogador1").textContent = pontosP1 + " - GANHOU!";
    }
    else if (pontosP2 > pontosP1 && pontosP1 > 21) {
        document.getElementById("jogador2").textContent = pontosP2 + " - GANHOU!";
    }
    else if (pontosP1 <= 21 && pontosP2 <= 21) {
        document.getElementById("jogador1").textContent = pontosP1 + " - EMPATE";
        document.getElementById("jogador2").textContent = pontosP1 + " - EMPATE";
    }
    else {
        document.getElementById("jogador1").textContent = pontosP1 + " - SEM VENCEDOR.";
        document.getElementById("jogador2").textContent = pontosP2 + " - SEM VENCEDOR.";
    }

}


var pontosP1=0;

function jogador1() {




    document.getElementById("btn_parar_1").disabled = false;
    
    
    
    var valorAtualP1;
    var cartas1 = document.getElementById("cartas1");
    $(cartas1).attr("src", '/images/' + (valorAtualP1 = valorAleatorio()) + '.png');

    pontosP1 += valorAtualP1;
    document.getElementById("jogador1").textContent = pontosP1;

    //executando a função Resultado
    if (pontosP1 > 21) {

        document.getElementById("jogador1").textContent = pontosP1 + " - ESTOUROU";

        document.getElementById("btn_jogador_1").disabled = true;

        //habilitando o botao P2
        document.getElementById("btn_jogador_2").disabled = false;


        //desabilitando o botao manter
        document.getElementById("btn_parar_1").disabled = true;


    }
    else if (pontosP1 == 21) {

        document.getElementById("jogador1").textContent = pontosP1 + " - GANHOU!!!";
        document.getElementById("btn_jogador_1").disabled = true;


        //desabilitando o botao manter
        document.getElementById("btn_parar_1").disabled = true;

        //habilitando o botao reiniciar
        document.getElementById("btn_reiniciar").disabled = false;


    }

}

var pontosP2 = 0;
function jogador2() {

    document.getElementById("btn_parar_2").disabled = false;

    var valorAtualP2;
    var cartas1 = document.getElementById("cartas2");
    $(cartas1).attr("src", '/images/' + (valorAtualP1 = valorAleatorio()) + '.png');

    pontosP2 += valorAtualP1;
    document.getElementById("jogador2").textContent = pontosP2;

    if (pontosP2 > 21) {
        document.getElementById("jogador2").textContent = pontosP2 + " - ESTOUROU";

        document.getElementById("btn_jogador_2").disabled = true;

        //desabilitando o botao manter
        document.getElementById("btn_parar_2").disabled = true;

        document.getElementById("btn_reiniciar").disabled = false;

        ResultadoFinal();

    }
    else if (pontosP2 == 21) {
        document.getElementById("jogador2").textContent = pontosP2 + " - GANHOU!!!";
        document.getElementById("btn_jogador_2").disabled = true;


        //desabilitando o botao manter
        document.getElementById("btn_parar_2").disabled = true;

        document.getElementById("btn_reiniciar").disabled = false;

        //mostrando resultado final
        ResultadoFinal();

    }



}


function reiniciar() {
    var cartas2 = document.getElementById("cartas2");
    $(cartas2).attr("src", '/images/' + '0.png');

    var cartas1 = document.getElementById("cartas1");
    $(cartas1).attr("src", '/images/' + '0.png');

    //desabilitando os botões
    document.getElementById("btn_parar_1").disabled = true;
    document.getElementById("btn_jogador_2").disabled = true;
    document.getElementById("btn_parar_2").disabled = true;
    document.getElementById("btn_reiniciar").disabled = true;

    //habilitando botao iniciar
    document.getElementById("btn_iniciar").disabled = false;

    //zerando os placares
    document.getElementById("jogador1").textContent = "0";
    document.getElementById("jogador2").textContent = "0";


    pontosP1 = 0;
    pontosP2 = 0;



}



function parar1() {

    var btn_jogador1 = document.getElementById("btn_jogador_1");
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar1 = document.getElementById("btn_parar_1");
    var btn_parar2 = document.getElementById("btn_parar_2");

  
    $(btn_jogador1).attr('disabled', 'disabled');
    $(btn_parar1).attr('disabled', 'disabled');

    $(btn_jogador2).removeAttr('disabled');



}

function parar2() {
    document.getElementById("btn_parar_2").disabled = true;
    document.getElementById("btn_reiniciar").disabled = false;
    document.getElementById("btn_jogador_2").disabled = true;
    ResultadoFinal();
    
    
}