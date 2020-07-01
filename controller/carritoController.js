const CarritoModel = require("../models/carrito");
const UserModel = require("../models/user");
const ProductoModel = require('../models/producto');
const { create } = require("../models/carrito");



const carritoController ={
    mostrarCarrito: async (req , res) => {
        const { id } = req.params;
      
    const carrito = await CarritoModel.find({usuario:id}).populate("productos.productoId");
    return res.json({carrito})
    
},

cargarProductoCarrito: async (req , res) => {

    const { usuarioID , productoID ,cantidad} = req.body;
    
    
    //busco si hay un carrito con ese usuario



    const ExisteCarrito = await CarritoModel.find({usuario:usuarioID});
    if(ExisteCarrito[0]!= undefined){
        //veo si existe el producto
        const listaProductos = ExisteCarrito[0].productos
        

        const producto = listaProductos.find(product=>product.productoId==productoID)

        if (producto) {
            //si existe aumentar la cantidad 

            //si hay una cantidad desde un select existe una constante "cantidad" y la cantidad se aumenta en ese numero
            if(cantidad>0){
                //aumentar la cantidad el numero de su constante
                const _idProduc=producto._id
             const newCarrito = await CarritoModel.findOneAndUpdate({_id:ExisteCarrito[0]._id ,"productos._id": _idProduc}, {$inc:{"productos.$.cantidadProducto":cantidad}})
             res.status(200).json({newCarrito})
             return 
            }

        const _idProduc=producto._id
             const newCarrito = await CarritoModel.findOneAndUpdate({_id:ExisteCarrito[0]._id ,"productos._id": _idProduc}, {$inc:{"productos.$.cantidadProducto":1}})
             res.status(200).json({newCarrito})
            return 
        }else{
            //si el producto no esta en el carrito
            const newCarrito = await CarritoModel.findByIdAndUpdate({_id:ExisteCarrito[0]._id}, {$push:{productos:{productoId:productoID,cantidadProducto:1}}})
            console.log(newCarrito)

             return res.status(200).json({newCarrito})
        }
        
    }
    //si se creo la cuenta y no tiene un carrito

    //creo el carrito con el usuarioID y el productoID
    const newCarrito = new CarritoModel({usuario:usuarioID,productos:{productoId:productoID,cantidadProducto:1}})
   
     newCarrito.save();


    //lo guardo al _id del  carrito en el usuario.carrito
  const user = await UserModel.findByIdAndUpdate({_id:usuarioID},{carrito:newCarrito._id})
  console.log(user)
       
       
        return res.json(newCarrito)
    

        
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