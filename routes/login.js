const router = require('express').Router();

const UserController = require("../controller/userController")

router.route("/")
        .post(UserController.autenticarUsuario);

module.exports = router;
