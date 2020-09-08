const ProductoModel = require("../models/producto");
const CarritoModel = require("../models/carrito");

const verificarStock = async (req,res,next)=> {
    const { carrito}= req.body;
    // traigo el carrito del usuario
const carritoUser = await CarritoModel.findOne({_id:carrito}).populate('productos.productoId');
//separo los productos 
const productos = carritoUser.productos;


const ProductoAlmacen = await ProductoModel.find();

//array de verdad
let stock =[];
//ciclo de verificacion 
var ProductodelAlmacenSeparados = [];
productos.forEach(element => {
    const cantidad = element.cantidadProducto;
    const productoCompra = element.productoId._id
   
    ProductoAlmacen.map(producto => {
         if (String(producto._id ) === String(productoCompra) ) {
             //veo si la cantidad coincide
             if (parseInt(producto.stock)>=cantidad) {
                 stock.push(true)
             }else{
                stock.push(false) 
             }
             
         }  
    })
    
});
    //verificar el stock 
    if (stock.includes(false)) {
       return res.json({message:"No hay suficiente stock"})
    }else{
        return next()
    }

     
};

module.exports= verificarStock
