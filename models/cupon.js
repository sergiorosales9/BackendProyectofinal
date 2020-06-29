const mongoose = require("mongoose");
const findOrCreate = require('mongoose-findorcreate')


const CuponSchema = mongoose.Schema({
Cantidad : {
  type : Number,
  required : true,
  trim : true
},
Numero : {
  type : Number,
  required : true,
  trim : true
},
Descuento :{
  type : Number,
  required : true,
  trim : true
}
})

CuponSchema.plugin(findOrCreate) ;
const Cupon = mongoose.model("Cupon", CuponShema);
module.exports=Cupon