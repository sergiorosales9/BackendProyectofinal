const mongoose = require("mongoose");
require("dotenv").config();

// const URI = 'mongodb://localhost/rolling';
const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("DB Conectada");
  } catch (error) {
    console.log(error);
    process.exit(1); // Detener la app
  }
};

module.exports = {connection};