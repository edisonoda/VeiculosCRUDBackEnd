module.exports = class Veiculo{
    constructor(id, placa, chassi, renavam, modelo, marca, ano){
        if(!id || !placa || !chassi || !renavam || !modelo || !marca || !ano){
            throw "Dados inválidos.";
        }

        if(typeof id != "number" ||
        typeof placa != "string" ||
        typeof chassi != "string" ||
        typeof renavam != "number" ||
        typeof modelo != "string" ||
        typeof marca != "string" ||
        typeof ano != "number"){
            throw "Dados inválidos.";
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