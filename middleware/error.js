const errorHandler = (error, req, res, next) => {

  // Log to console for dev
  console.log(error);

  const errorStatus = error.statusCode || 500;

  if (errorStatus == 500) {
    error.message = 'server error';
  }
  const header = {
    title: "Ops something went wrong",
    body: "Error"
  };

  res.status(errorStatus).render('errorView', {
    error: {
      status: errorStatus,
      message: error.message
    }, header
  });

};

module.exports = errorHandler;
