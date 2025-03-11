/* eslint-disable prettier/prettier */
/* eslint-disable implicit-arrow-linebreak */
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes");
const notFoundHandler = require("./utils/error/notFoundHandler");
const globalErrorHandler = require("./utils/error/globalErrorHandler");

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  morgan((tokens, req, res) =>
    [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.date("clf"),
    ].join(" ")
  )
);

app.get("/api/v1", async (req, res) => {
  res.send("Hello! Vanish Vote Server is Running Successfully!");
});

app.use("/api/v1", router);

app.all("*", notFoundHandler);
app.use(globalErrorHandler);

module.exports = app;
