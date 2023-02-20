//Rutas
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

//api/users
router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.put('/:id', userController.updateUser);
router.get('/:id', userController.getUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;