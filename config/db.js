const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const createDBConnection = () => {
  const connectionString = process.env.MONGO_URI || "";

  mongoose.set("strictQuery", true);
  mongoose
    .connect(connectionString, {})
    .then(() => {
      console.log("Database Connected Successfully".green.bold);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = createDBConnection;
