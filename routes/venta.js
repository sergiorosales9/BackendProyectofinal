const router = require('express').Router();
const VerificarPago = require("../middleware/verificarPago");
const VentaController = require("../controller/ventaController");
const ProductoController = require("../controller/productoController");
const CarritoController = require("../controller/carritoController");
const EmailController = require("../controller/enviarEmail");
const verificarStock = require('../middleware/verificarStockProducto');

router.route("/:_id")
// traer un las ventas de un usuario
        .get(VentaController.listarVentasUsuario)
router.route("/") 
        .get(VentaController.listarVentas)       
        .post(
            verificarStock,
            VerificarPago,
             VentaController.cargarVenta,
             CarritoController.actualizarCarrito,
             ProductoController.actualizarStock,
             EmailController.emailVenta)       

module.exports = router;