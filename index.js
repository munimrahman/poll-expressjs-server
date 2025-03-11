const dotenv = require("dotenv");
const colors = require("colors");
const app = require("./app");
const createDBConnection = require("./config/db");

dotenv.config();

const PORT = process.env.PORT;

createDBConnection();

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`.yellow.bold);
});
