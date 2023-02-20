const express = require('express');
const DBconnection = require('./config/db');
const cors = require('cors');
const mongoose = require("mongoose");

//Se crea el servidor
const app = express();

//Conectar a DB
DBconnection();
app.use(cors())

//habilitar datos JSONs
app.use(express.json());

//Ruta
app.use('/api/users', require('./routes/user'));
app.listen(5001, () => {
    console.log('The server is runnig')
})