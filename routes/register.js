const router = require('express').Router();

const UserController = require("../controller/userController");
const enviarEmail = require('../controller/enviarEmail');

router.route("/")
        .post(UserController.agreagarUsuario, enviarEmail.emailUser);

module.exports = router;
