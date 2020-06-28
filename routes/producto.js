const router = require('express').Router();

const ProductoController = require("../controller/productoController")

router.route("/")
        .get(ProductoController.listarProductos)
        .post(ProductoController.cargarProducto);
router.route("/")
        .put(ProductoController.modificarProducto);         
        

module.exports = router;