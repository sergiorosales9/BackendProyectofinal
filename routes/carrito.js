const router = require('express').Router();

const carritoController = require("../controller/carritoController")

router.route("/")
        .post(carritoController.cargarProductoCarrito);
router.route("/:id")
        .get(carritoController.mostrarCarrito)
        .put(carritoController.editarCarrito) 
        .delete(carritoController.eliminarProductoCarrito);       
        

module.exports = router;
