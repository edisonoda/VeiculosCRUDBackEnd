var VeiculoController = require("../controllers/veiculo.controller");
const veiculoController = new VeiculoController();

module.exports = function(server){
    server.post("/", veiculoController.create);
    server.put("/:id", veiculoController.update);
    server.delete(":id", veiculoController.delete);
    server.get("/", veiculoController.index);
    server.get("/:id", veiculoController.get);
}