const VentaController = require("../controller/ventaController");
const router = require('express').Router();

router.route("/:id")
// traer un las ventas de un usuario
        .get(VentaController.ventaRealizada)

module.exports = router;
