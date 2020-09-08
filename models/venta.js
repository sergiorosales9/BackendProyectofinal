const mongoose = require("mongoose");

const VentaSchema = mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  nombre: {
    type: String,
    required:true,
    
  },
  apellido: {
    type: String,
    trim: true,
    required:true,
  },
  direccion_1: {
    type: String,
    required:true,
   
  },
  direccion_2: {
    type: String,
    
  },
  pais: {
    type: String,
    required:true,
    trim: true,
  },
  postal: {
    type: String,
    required:true,
    trim: true,
  },
  prov: {
    type: String,
    required:true,
    trim: true,
  },
  telefono: {
    type: String,
    required:true,
    trim: true,
  },
  prov: {
    type: String,
    required:true,
    trim: true,
  },
  tipoEnvio: {
    type: String,
    required:true,
    trim: true,
  },
  tarjeta: {
    cvc: {
      type: String, 
      trim: true,
    },
    expiracion: {
      type: String,
      trim: true,
    },
    nombre: {
      type: String,
    },
    numero: {
      type: String,
  
      trim: true,
    },
    
  },
  efectivo: {
    type: Boolean,
  },
  total: {
    type: String,
    required:true,
    trim: true,
  },
  subtotal: {
    type: String,
    required:true,
    trim: true,
  },
  productos: [
    {
      nombre:{
      type:String
    },
    precio:{
      type:String
    },
    cantidad:{
      type:String
    }
  }
  ],
  estadoVenta: {
   type:String
  },
  creado:{
    type:Date,
    default:Date.now()
  }
});

const Venta = mongoose.model("Venta", VentaSchema);
module.exports = Venta;
