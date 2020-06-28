const mongoose = require("mongoose");

const CarritoShema = mongoose.Schema({
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  Productos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Producto",
    },
  ],
  descuento: {
    type: String,
    trim: true,
  }
});
const Carrito = mongoose.model("Carrito", CarritoShema);
module.exports = Carrito;
