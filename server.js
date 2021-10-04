const express = require("express");
const server = express();
const cors = require("cors");

server.use(
    cors({
        origin: "http://localhost:4200"
    })
);

server.use(express.json());
require("./routes/routes")(server);
server.listen(3000);