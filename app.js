const express = require("express");
const server = express();

server.use(express.json());
require("./routes")(server);
server.listen(3000);