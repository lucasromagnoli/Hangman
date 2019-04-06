/* Objects */


function foo() {
    alert("Function Foo - ");
}

// Função responsável por inserir mensagens no jogo.
function setWarningMessage(msg){
    document.getElementById("warningMessage").textContent = msg;
}

// Menu
function startGame(){
    // Mostra ao jogador que ele dever escolher a quantidade de jogadores.
    setWarningMessage("Favor escolher a quantidade de jogadores.");
    // Esconde o menu.
    document.getElementsByClassName("game-menu")[0].style.display = "none";
    // Faz aparecer a view referente ao "Step One".
    document.getElementsByClassName("game-step-one")[0].style.display = "block";
}

/* Step One */
function checkName(name){
    if(name != ""){
        return true;
    } else {
        return false;
    }
}

function stepOne(button){
    /* Aparecer as labels com os respectivos nomes de cada jogador */
    // constiavel que armazena a quantidade de jogadores informada pelo próprio jogador.
    const amountOfPlayers = document.getElementById("amountOfPlayers").value;
    // constiavel que armezena um array que contém todos os 5 divs referente a cada jogador e seu respectivo nome.
    const amountOfPlayersLabelArray = document.getElementsByClassName("game-name-player");

    // Verifica se o botão apertado foi o "continuar".
    if (button.textContent.toLowerCase() == "continuar"){

        // Verifica se a quantida de jogadores foi inserida corretamente.
        if (isNaN(amountOfPlayers) || amountOfPlayers < 2 || amountOfPlayers > 5){
            setWarningMessage("Quantidade incorreta de jogadores!");
            for (let index = 0; index < 5; index++) {
                amountOfPlayersLabelArray[index].style.display="none";
            }
            return;
        }
        
        // Faz aparecer as labels com seus respectivos textBox para inserir o nome de cada jogador.
        setWarningMessage("Favor inserir o nome de cada jogador");
        for (let index = 0; index < amountOfPlayers; index++) {
            amountOfPlayersLabelArray[index].style.display="block";
        }

        // Caso a quantidade de jogadores for menor que 5, escodendo os outros labels, assim evitamos bugs caso o jogador tenha colocado uma quantidade e depois alterado para uma menor.
        if (amountOfPlayers < 5) {
            for (let index = amountOfPlayers; index < 5; index++) {
                amountOfPlayersLabelArray[index].style.display="none";
            }
        }
    // Verifica se o botão apertado foi o "começar".
    } else if (button.textContent.toLowerCase() == "começar") {
        const foo = 0;
        const validate = false;
        for (let index = 0; index < 5; index++) {
            if (amountOfPlayersLabelArray[index].style.display == "block") {
                foo += 1;
            }
        }

        for (let index = 0; index < foo; index++) {
            let name = document.getElementById("name-player-"+(index+1)).value;
            if (checkName(name)) {
                validate = true;
            } else {
                validate = false;
                setWarningMessage("Favor verificar o nome do jogador "+(index+1));
                break;
            }
            
        }
        
        if (validate) {
            
        }

    }
}