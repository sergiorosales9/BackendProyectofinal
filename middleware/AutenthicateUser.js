const passport = require("passport");

const AutenthicateUser = (req, res, next) => {
    passport.authenticate("jwt", { session: false }, (error, user,info) => {
      if (error) next(error);
      if (info)  next(res.status(400).json({ error: info.message }) );
      if (!user) next( res.status(400).json({ error: "Prohibido : usuario no encontrado" }));
      req.user = user;
      next();
    })(req, res, next);
  }
  module.exports = AutenthicateUser;