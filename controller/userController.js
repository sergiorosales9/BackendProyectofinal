const UserModel = require("../models/user");
const passport = require("passport");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const UserController = {
  listarUsuaros: async (req, res, next) => {
    const users = await UserModel.find();
    return res.json(users);
  },

  agreagarUsuario: async (req, res, next) => {
    const { username, email, password } = req.body;

    const user = await UserModel.findOne({ $or: [{ username }, { email }] });

    if (user) {
      res
        .status(404)
        .send({
          error: `El usuario ${username} o el email ${email} ya se encuentra en uso`,
        });
      return;
    }

    const newUser = new UserModel({
      ...req.body,
      password: bcrypt.hashSync(password, parseInt(process.env.BCRYPT_ROUNDS)),
    });

    
    const response = await newUser.save();
    res.json(response)
  },

  autenticarUsuario : (req , res , next) => {
    console.log('antes del strategy local')
      passport.authenticate('local', {session:false} , (error,user, info) =>{

        if (error) { return res.status(400).json({error}); }

        if (!user) { return res.stauts(400).json({message : "user not found o password incorret"}) }
        
        const payload = {
          sub : user._id,
          role: user.role,
          exp: Date.now() + 36000
        }
      const token =  jwt.sign(payload, process.env.SECRETA, {algorithm: process.env.ALGORITMO})
        res.json({token});
      })(req, res , next) 
  }

 


};
module.exports = UserController;
