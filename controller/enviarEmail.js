  const UserModel = require("../models/user")
  
  const enviarEmail = {
        emailVenta : async(req, res, next) => {
                const { usuario } = req.body;
                
            // sirve para enviar el email con la venta realizada al correo del usuario
            //buscando el email del usuario
            const user= await UserModel.findOne({_id:usuario});
            
                console.log("email enviado con la venta realizada" + "a "+ user.email)
            },
            emailUser: (req , res , next) => {
                // envia la confirmacion de que se creo el usuario
            },
            emailPassword:(req, res , next )=> {
                // envia una contraseña nueva al correo del usuario
            },
            emailTurno : (req , res , next ) => {
                // envia la confirmacion del turno a la persona 
            },
            emailRecordatorio: (res, req , next) => {
                // envia recordatorio del turno un dia antes
            }

         
         
    };

    module.exports= enviarEmail
    
    