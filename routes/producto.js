const router = require('express').Router();

const ProductoController = require("../controller/productoController")

router.route("/")
        .get(ProductoController.listarProductos)
        .post(ProductoController.cargarProducto);
router.route("/:_id")
        .put(ProductoController.modificarProducto)
        .delete(ProductoController.eliminarProducto)
        
module.exports = router;