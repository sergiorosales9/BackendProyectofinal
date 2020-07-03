const router = require('express').Router();

const carritoController = require("../controller/carritoController")

router.route("/")
        .post(carritoController.cargarProductoCarrito);
router.route("/:_id")
        .get(carritoController.mostrarCarrito)
        .delete(carritoController.eliminarProductoCarrito);       
        

module.exports = router;
