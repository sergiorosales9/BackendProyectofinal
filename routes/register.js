const router = require('express').Router();

const UserController = require("../controller/userController")

router.route("/")
        .post(UserController.agreagarUsuario);

module.exports = router;
