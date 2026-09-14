const unknownEndpoint = (request, response) => {
  response.status(404).json({
    error: "unknown endpoint",
  });
};

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  response.status(500).json({
    message: "Something went wrong!",
  });
};

module.exports = {
  unknownEndpoint,
  errorHandler,
};