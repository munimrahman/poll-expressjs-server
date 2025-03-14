const { MongoServerError } = require("mongodb");
const {
  HTTP_INTERNAL_SERVER_ERROR,
  HTTP_BAD_REQUEST,
} = require("../constants/constants");
const CustomError = require("./customError");

const globalErrorHandler = (err, req, res, next) => {
  // TODO Delete Me
  console.log("From Global Error Handler");
  console.log(err);

  if (err instanceof CustomError) {
    res.status(err.statusCode).json({ message: err.message });
  } else if (err.name === "MongooseError") {
    res.status(HTTP_BAD_REQUEST.code).json({ message: err.message });
  } else if (err.name === "MongoServerError") {
    res.status(HTTP_BAD_REQUEST.code).json({ message: err.message });
  } else if (err.name === "ValidationError") {
    res.status(HTTP_BAD_REQUEST.code).json({ message: err.message });
  } else {
    res.status(HTTP_INTERNAL_SERVER_ERROR.code).json({
      message: HTTP_INTERNAL_SERVER_ERROR.message,
    });
  }
};

module.exports = globalErrorHandler;
