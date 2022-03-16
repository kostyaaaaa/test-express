const express = require("express");
const session = require("express-session");
const redis = require("redis");
let RedisStore = require("connect-redis")(session);
let redisClient = redis.createClient();

const router = require("./router");
const errorHandler = require("./errorHandler");
const logger = require("./logger");
require("./eventEmitter");
require("./process");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: "secret-key",
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge: 3000 },
  })
);
app.use(logger);
app.use(router);
app.use(errorHandler);

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
});
