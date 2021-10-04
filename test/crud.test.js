const assert = require("chai").assert;
const data = require("../veiculos.json");
var VeiculoController = require("../controllers/veiculo.controller");

describe("FindById", function() {
    let id = data.veiculos[0].id;

    it("Caso padrão", function() {
        if(id){
            let resultado = VeiculoController.findById(id);
            assert.typeOf(resultado, "Object");
        }else{
            assert.isNull(id);
        }
    });

    it("ID negativo", function() {
        let resultado = VeiculoController.findById(-1);
        assert.isNull(resultado);
    });

    it("ID como string", function() {
        let resultado = VeiculoController.findById("teste");
        assert.isNull(resultado);
    });
});