const path = require("path");
const os = require("os");

const logger = (req, res, next) => {
  console.log("\n\ndirname: ", __dirname, "filename: ", __filename);
  console.log("path basename: ", path.basename(__filename));
  console.log("path extname: ", path.extname(__filename));
  console.log("path parse: ", path.parse(__filename));

  console.log("\n\ntemp dir: ", os.tmpdir());
  console.log("freemem: ", os.freemem());
  console.log("totalmem: ", os.totalmem());
  console.log("platform: ", os.platform());
  console.log("homedir: ", os.homedir());
  console.log("hostname: ", os.hostname());

  next();
};

module.exports = logger;
