const mongoose = require("mongoose");
const findOrCreate = require('mongoose-findorcreate')

const UserShema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  fisrtname: {
    type: String,
    trim: true,
  },
  lastname: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  facebook:{
    id:String
  },
  role: {
    type: String,
    trim: true,
  },

});
UserShema.plugin(findOrCreate) ;
const User = mongoose.model("User", UserShema);
module.exports=User