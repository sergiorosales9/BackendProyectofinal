const CarritoModel = require("../models/carrito");
const UserModel = require("../models/user");
const ProductoModel = require('../models/producto');
const Carrito = require("../models/carrito");




const carritoController ={
    //muestra el carrito del usuario

    mostrarCarrito: async (req , res) => {
        const { _id } = req.params;
      
    const carrito = await CarritoModel.find({usuario:_id}).populate("productos.productoId");
    return res.json({carrito})
    
},
// carga un producto al carrito

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
             const newCarrito = await CarritoModel.findOneAndUpdate({_id:ExisteCarrito[0]._id ,"productos._id": _idProduc}, {"productos.$.cantidadProducto":cantidad})
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


//elimina un producto del carrito 

eliminarProductoCarrito: async (req , res) => {
    const {_id} = req.params;
    const {usuarioId} = req.body;
    const  productoId = _id

    console.log(req.body)
  
    console.log(req.params)
    //con el usuario busco el carrito

    const carrito = await CarritoModel.findOneAndUpdate({usuario:usuarioId,"productos._id":productoId},{ $pull: { 'productos': { _id: productoId } }})
        if (carrito) {
         return   res.json({message:"Producto eliminado"})
        }else{
            return res.json({message:"error "})
        }
       
},

// actualiza el carrito a cero despues de la venta exitosa
actualizarCarrito : async(req, res, next) => {
    const {carrito} =req.body;
   
    const carritoUser = await CarritoModel.findOneAndUpdate({_id:carrito},{productos:[]})
    // elminar los productos del carrito
        next()
    
}
}

module.exports = carritoController;