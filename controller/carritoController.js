const CarritoModel = require("../models/carrito");
const UserModel = require("../models/user");
const ProductoModel = require('../models/producto')



const carritoController ={
    mostrarCarrito: async (req , res) => {
        const { user } = req.body;
        console.log(user)
    const carrito = await CarritoModel.find({usuario:user});
    return res.json({carrito})
    
},

cargarProductoCarrito: async (req , res) => {
    const { usuarioID , productoID } = req.body;
    //busco si hay un carrito con ese usuario
    const ExisteCarrito = await CarritoModel.find({usuario:usuarioID});
    if(ExisteCarrito!= []){
        //agrego el producto
        const _id= ExisteCarrito[0]._id
        console.log(_id)
        const newCarrito = await CarritoModel.findByIdAndUpdate({_id},{$push : {Productos:productoID}})
        return res.json({message:"producto agreago exitosamente"})
    }
//  const newCarrito = new CarritoModel({usuario,Productos:producto})
//    newCarrito.save()
//          res.json(newCarrito)

        
},



editarCarrito: async (req , res) => {

    const {nombre ,imagenNueva, descripcion ,stock,_id,precio,tipo} = req.body;
 
    const producto = await ProductoModel.findByIdAndUpdate(_id, {nombre,
        $push: {imagen:imagenNueva} ,
               descripcion,stock, precio,tipo})

    console.log(producto)
   if(producto){
       return res.json({message:"producto actualizado"})
   }else{
       return res.json({message:"producto no encontrado"})
   }
    

        
},

eliminarProductoCarrito: async (req , res) => {

    const {_id, productoId} = req.body;
 //busco el carrito
 const carrito = await CarritoModel.findById({_id});
   const productos= carrito.Productos;
  
   const newProductosCar = productos.filter(element => element != productoId)
  
   const newCarrito = await CarritoModel.findByIdAndUpdate({_id}, {Productos:newProductosCar})
  
        res.json({message:"Producto elminado"})
},
}

module.exports = carritoController;