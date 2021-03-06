const mongoose = require("mongoose");
// const config = require("config");
// const db = config.get("mongoURI");


const connectDB = async () => {
  try {
    mongoose.connect(process.env.DB_CONNECT, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log("MongoDB Connected ...");
  } catch (err) {
    console.error(console.log(err.message));

    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
