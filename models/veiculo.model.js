module.exports = class Veiculo{
    constructor(id, placa, chassi, renavam, modelo, marca, ano){
        if(!id || !placa || !chassi || !renavam || !modelo || !marca || !ano){
            console.log("algo null");
            throw "Dados inválidos (Null).";
        }

        if(placa.toString().length != 7) throw "Placa inválida"
        if(chassi.length != 17) throw "Número do chassi inválido"
        if(renavam.toString().length != 11) throw "Renavam inválido"
        if(ano.toString().length != 4) throw "Ano inválido"

        this.id = id;
        this.placa = placa;
        this.chassi = chassi;
        this.renavam = renavam;
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
    }
}