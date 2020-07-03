const router = require('express').Router();

const turnoController = require("../controller/turnoController")

router.route("/")
        .get(turnoController.mostrarTurnos)
        .post(turnoController.cargarTurnos);
router.route("/:_id")
        .get(turnoController.mostrarTurnosId)
        .put(turnoController.editarCarrito) 
        .delete(turnoController.eliminarTurnos);       
        

module.exports = router;
