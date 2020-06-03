const passportFacebook = require("passport-facebook");
const FacebookStrategy = passportFacebook.Strategy;
const UserModel= require("../models/user");


const config = {
  clientID: process.env.ID_FACEBOOK,
  clientSecret: process.env.SECRET_FACEBOOK,
  callbackURL: "http://localhost:8080/api/auth/facebook/callback",
  
};

const facebookStrategy = new FacebookStrategy(
  config,
  async (accessToken, refreshToken, profile, done) => {
      console.log(profile)
    const user = await UserModel.findOrCreate(
   {
        email:profile.email,
        username:profile.displayName.replace(/ /g, ''),
        'facebook.id': profile.id },
     
      (err, user) => {
        if(err) {return done(err);}
         done(null, user);
      }
    )
    console.log(user);
  }
);

module.exports = facebookStrategy;
