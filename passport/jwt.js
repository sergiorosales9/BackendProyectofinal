const passport_jwt = require('passport-jwt'); 
const JwtStrategy = passport_jwt.Strategy;
const extractJwt = passport_jwt.ExtractJwt;
const UserModel = require('../models/user');

const config = {
    jwtFromRequest : extractJwt.fromAuthHeaderAsBearerToken() ,
    secretOrKey : process.env.SECRETA,
    algorithms:[process.env.ALGORITMO],

}

const jwtStrategy = new JwtStrategy(config, async (payload , done)=>{
    const user = await UserModel.findById(payload.sub);
    if(!user) return done(null, false);
    return done(null, user)

});
module.exports = jwtStrategy;