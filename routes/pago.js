const VentaController = require("../controller/ventaController");
const verificarPago = require("../middleware/verificarPago");
const router = require('express').Router();

// router.route("/:id")
// // traer un las ventas de un usuario
//         .get(VentaController.ventaRealizada)

router.route("/")        
            .post(verificarPago)    
module.exports = router;
