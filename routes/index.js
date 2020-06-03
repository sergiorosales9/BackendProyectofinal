const router = require("express").Router();
const registerRoutes = require("./register");
const loginRoutes = require("./login");
const contentRoutes = require("./conten");
const AutenthicateUser = require("../middleware/AutenthicateUser");
const AutenthicateFacebook = require('../middleware/AutenthicateFacebook');
const passport = require('passport');


router.get("/", (req, res, next) => res.send("GESIONANDO USUARIOS"));

router.use("/register", registerRoutes);
router.use("/login", loginRoutes);
router.use("/private", AutenthicateUser, contentRoutes);

router.use("/public", contentRoutes);

//? pruebas con facebbok
router.use('/auth/facebook/callback', AutenthicateFacebook , contentRoutes);

router.use('/auth/facebook', passport.authenticate('facebook') );

module.exports = router;
