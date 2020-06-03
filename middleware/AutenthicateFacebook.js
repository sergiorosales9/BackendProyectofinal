const passport = require('passport');



const AutenthicateFacebook = (req , res , next) => {
    console.log('dentro de facebookStrategy')
    passport.authenticate('facebook',{  scope: ['read_stream', 'publish_actions'] }, { session:false },(error , user )=>{
        req.user = user;
        next();
      })(req, res, next);

      //? Redirrecionar con succesRedirect????
    }

module.exports = AutenthicateFacebook;


//! CUANDO ME LOGUEO CON FACEBOOK LLAMO A GET /api/auth/facebook
//! DESPUES LLAMO A GET api/auth/callback
//! DESPUES VUELVO A LLAMAR A api/auth/callback y me desvuelve la pagina