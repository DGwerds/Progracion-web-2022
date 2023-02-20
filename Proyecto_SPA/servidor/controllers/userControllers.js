const User = require("../models/User")

exports.createUser = async (req, res) => {
    console.log("1")
    try {
        let user;
        //Create user
        user = new User(req.body);
        await user.save();
        res.send(user);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server')
    }
}

exports.getUsers = async (req, res) => {

    try {

        const user = await User.find();
        res.json(user);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.updateUser = async (req, res) => {

    try {
        const { nombre, apellido, tipodocumento, documento, direccion, desdireccion, fecha, usuario, password, email, telefono } = req.body;
        let user = await User.findById(req.params.id);

        if (!user) {
            res.status(404).json({ msg: 'User not found, try with other user' })
        }
        user.nombre = nombre;
        user.apellido = apellido;
        user.tipodocumento = tipodocumento;
        user.documento = documento;
        user.direccion = direccion;
        user.desdireccion = desdireccion;
        user.fecha = fecha;
        user.usuario = usuario;
        user.password = password;
        user.email = email;
        user.telefono = telefono;

        user = await User.findOneAndUpdate({ _id: req.params.id }, user, { new: true })
        res.json(user);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.getUser = async (req, res) => {
    try {
        let user = await User.findById(req.params.id);

        if (!user) {
            res.status(404).json({ msg: 'User not found, try with other user' })
        }

        res.json(user);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.deleteUser = async (req, res) => {

    try {

        let user = await User.findById(req.params.id);

        if (!user) {
            res.status(404).json({ msg: 'User not found, try with other user' })
        }

        await User.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: "User deleted successfully" })

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}