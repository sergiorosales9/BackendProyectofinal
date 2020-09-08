const mongoose = require("mongoose");

const ProductoShema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
      },
      stock: {
        type: Number,
        trim: true,
      },
      imagen: [{
        type: String,
        trim: true,
      }],
      precio:{
        type:String,
        required:true,
      },
      descripcion: {
        type: String,
        required: true,
        trim: true,
      },
      tipo:{
        type: String,
        required: true,
        trim: true,
      }
});

const Producto = mongoose.model("Producto", ProductoShema);
module.exports= Producto