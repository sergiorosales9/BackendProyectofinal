const router = require('express').Router();

const carritoController = require("../controller/carritoController")

router.route("/")
        .get(carritoController.mostrarCarrito)
        .post(carritoController.cargarProductoCarrito);
router.route("/")
        .put(carritoController.editarCarrito) 
        .delete(carritoController.eliminarProductoCarrito);       
        

module.exports = router;