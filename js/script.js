// const Globais
const tipo = document.getElementById('selectVeiculo');
const fabricante = document.getElementById('fabricanteInput');
const modelo = document.getElementById('modeloInput');
const placa = document.getElementById('placaInput');
const cor = document.getElementById('corInput');
const localCards = document.getElementById('localCards');
const veiculosCadastrados = [];

class Veiculo {
    constructor() {
        this.tipo = tipo.value;
        this.fabricante = fabricante.value;
        this.modelo = modelo.value;
        this.placa = placa.value;
        this.cor = cor.value;
    }

    card = function () {
        let cardVeiculo = "";

        if (this.tipo == "Moto") {
            cardVeiculo = '<article id="cardVeiculo"  class="cardMoto card col-md-3">' ;
        } else {
            cardVeiculo = '<article id="cardVeiculo"  class="cardCarro card col-md-3">';      
            
        }

        cardVeiculo +=  '<p><strong>Tipo: </strong>' + this.tipo + '</p>' +
        '<p><strong>Fabricante: </strong>' + this.fabricante + '</p>' +
        '<p><strong>Modelo: </strong>' + this.modelo + '</p>' +
        '<p><strong>Placa: </strong>' + this.placa + '</p>' +
        '<p><strong>Cor: </strong>' + this.cor + '</p>' +
        '</article>';
        return cardVeiculo;
    }
}

function cadastrar() {
    if (fabricante.value != "" && modelo.value != "" && cor.value != "") {
        veiculosCadastrados.push(new Veiculo());
        preenchido();
    } else { alert('Atenção!!! Fabricante, modelo e cor são obrigatorios.'); 
semPreencher()};

    document.getElementById("form-cadastro").reset();
    mostrar();
}


mostrar = function () {
    let card = "";
    let i = 0
    while (i < veiculosCadastrados.length) {
        card += veiculosCadastrados[i].card();
        i++;
    }

    localCards.innerHTML = card;
}


semPreencher = function () {
    fabricante.classList.add('erro');
    modelo.classList.add('erro');
    cor.classList.add('erro');
}
preenchido = function(){
    fabricante.classList.remove('erro');
    modelo.classList.remove('erro');
    cor.classList.remove('erro');
}


