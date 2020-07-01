const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const User = require("../models/user");

const localStrategy = new LocalStrategy (async (username, password, done  ) => {
  console.log('estoy dentro del strategy local')

  const user = await (await User.findOne({ username })).populate('carrito');

  if (!user) {
    return done(null, false, { message: "Incorrect username." });
  }
  if (!bcrypt.compareSync(password, user.password)) {
    return done(null, false, { message: "Incorrect password" });
  }
  return done(null, user);
});

module.exports = localStrategy;