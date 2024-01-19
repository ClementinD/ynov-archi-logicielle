import { Position } from "../Topologie/Position";
import { Map } from "../Topologie/Map";
import { Interpreter } from "../Topologie/Interpreter";
import { Entier } from "../Topologie/Entier";

require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const cors = require("cors");
const port = process.env.PORT || 3003;

app.use(cors());
app.use(express.json());

// Initialisation de la carte avec une taille de 4x4
const map = new Map(new Entier(6), new Entier(6));

// Créer une nouvelle instance d'Interpreter
const interpreter = new Interpreter(map);

require("../routes/rover.routes")(app, interpreter);

server.listen(port, () => {
  console.log(`Server listening on localhost:${port}.`);
});
