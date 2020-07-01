const router = require('express').Router();

const admnController = require("../controller/adminUserController")

router.route("/")
        .get(admnController.traerUsers)
        

module.exports = router;