const fs = require("fs");
const path = require("path");

const data = require("../veiculos.json");
var Veiculo = require("../Models/Veiculo");

module.exports = class VeiculoController {
    static writeFile(cb){
        fs.writeFile(
            path.join(__dirname + "/../", "veiculos.json"),
            JSON.stringify(data, null, 4),
            err => {
                if (err) throw err;
    
                cb(JSON.stringify({message: "ok"}));
            }
        )
    }
    
    static findById(id){
        for(let i = 0; i < data.veiculos.length; i++){
            if(data.veiculos[i].id == id){
                return data.veiculos[i];
            }
        }
    
        return null;
    }
    
    create(req, res){
        try{
            data.veiculos.push(new Veiculo(
                req.body.id,
                req.body.placa,
                req.body.chassi,
                req.body.renavam,
                req.body.modelo,
                req.body.marca,
                req.body.ano));
            console.log("Create");

            return VeiculoController.writeFile((message) => res.status(500).end(message));
        }catch(err){
            return res.status(400).send(err);
        }
    }
    
    update(req, res){
        try{
            const veiculo = VeiculoController.findById(req.params.id);
    
            if(!veiculo) return res.status(404).send("Veiculo não encontrada.");
    
            if(req.body.id){
                veiculo.id = req.body.id;
            }
            
            if(req.body.placa){
                veiculo.placa = req.body.placa;
            }
    
            if(req.body.chassi){
                veiculo.chassi = req.body.chassi;
            }

            if(req.body.renavam){
                veiculo.renavam = req.body.renavam;
            }

            if(req.body.modelo){
                veiculo.modelo = req.body.modelo;
            }

            if(req.body.marca){
                veiculo.marca = req.body.marca;
            }

            if(req.body.ano){
                veiculo.ano = req.body.ano;
            }
    
            return VeiculoController.writeFile((message) => res.end(message));
        }catch(err){
            return res.status(400).send("Erro ao atualizar veiculo!");
        }
    }
    
    delete(req, res){
        try{
            data.veiculos = data.veiculos.filter(veiculo => veiculo.id != req.params.id);
    
            return VeiculoController.writeFile((message) => res.end(message));
        }catch(err){
            return res.status(400).send("Erro ao deletar veiculo!");
        }
    }
    
    index(req, res){
        try{
            return res.end(JSON.stringify(data));
        }catch(err){
            return res.status(400).send("Erro ao requisitar veiculos!");
        }
    }
    
    get(req, res){
        try{
            const veiculo = VeiculoController.findById(req.params.id);
    
            if(!veiculo) return res.status(404).send("Veiculo não encontrada.");
    
            return res.end(JSON.stringify(veiculo));
        }catch(err){
            return res.status(400).send("Erro ao requisitar veiculos!");
        }
    }
}
