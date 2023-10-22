const mongoose = require("mongoose");
require("dotenv").config();
const DATABASE_NAME = "pet-adoption";
const MONGODB_URI = `${process.env.CONNECTION_URL}`;
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: DATABASE_NAME,
};

mongoose.set("strictQuery", true);

mongoose
  .connect(MONGODB_URI, mongooseOptions)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
module.exports = mongoose.connection;
