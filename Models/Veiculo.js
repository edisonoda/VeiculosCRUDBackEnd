module.exports = class Veiculo{
    constructor(id, placa, chassi, renavam, modelo, marca, ano){
        if(id == null || placa == null || chassi == null || renavam == null || modelo == null
            || marca == null || ano == null){
            throw "Dados inválidos.";
        }

        this.id = id;
        this.placa = placa;
        this.chassi = chassi;
        this.renavam = renavam;
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
    }
}