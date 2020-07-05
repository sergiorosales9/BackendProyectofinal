const router = require('express').Router();
const enviarEmail = require("../controller/enviarEmail")
const turnoController = require("../controller/turnoController")

router.route("/")
        .get(turnoController.mostrarTurnos)
        .post(turnoController.cargarTurnos, enviarEmail.emailTurno );
router.route("/:_id")
        .get(turnoController.mostrarTurnosId)
        .delete(turnoController.eliminarTurnos);       
        

module.exports = router;
