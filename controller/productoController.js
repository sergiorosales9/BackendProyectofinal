const ProductoModel = require("../models/producto");


const ProductoController ={
listarProductos: async (req , res) => {
    const productos = await ProductoModel.find();
    return res.json({productos})
    
},

cargarProducto: async (req , res) => {
    const {nombre ,imagen, descripcion ,stock ,precio, tipo} = req.body;

    const newProducto = new ProductoModel({nombre ,imagen, descripcion ,stock ,precio,tipo})
   
    //Exite el producto?
    const productoExiste = await ProductoModel.find({nombre})
    console.log(productoExiste)
    if(productoExiste == null){
        return res.json({message:"el producto ya esta en la lista"});
    }
      newProducto.save()
    return res.json({newProducto})

        
},

modificarProducto: async (req , res) => {

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

}

module.exports = ProductoController;