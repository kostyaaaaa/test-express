const errorHandler = (err, req, res, next) => {
  console.error(
    "<ERROR HANDLER>",
    "\nmessage: ",
    err.message,
    "\ncode: ",
    err.code,
    "\nname: ",
    err.name
  );
  res.status(401).send({ error: err.message });
};

module.exports = errorHandler;
