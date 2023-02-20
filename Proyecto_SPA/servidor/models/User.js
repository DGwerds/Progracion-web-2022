const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    tipodocumento: {
        type: String,
        required: true
    },
    documento: {
        type: Number,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    desdireccion: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    usuario: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('User', UserSchema);