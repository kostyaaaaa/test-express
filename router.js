const express = require("express");
const path = require("path");
const fs = require("fs");

const { multiply } = require("./utils");

const router = express.Router();

router.get("/", async function (req, res, next) {
  try {
    if (req.session.viewCount) {
      req.session.viewCount++;
    } else {
      req.session.viewCount = 1;
    }
    fs.writeFile(path.join(__dirname, "test.txt"), "text", (err) => {
      if (err) {
        throw err;
      }
      fs.readFile(path.join(__dirname, "test.txt"), "utf8", (err, content) => {
        try {
          if (err) {
            throw err;
          } else {
            res.send(`hello world ${req.session.viewCount} ${content}`);
          }
        } catch (err) {
          next(err);
        }
      });
      fs.unlink(path.join(__dirname, "test.txt"), (err) => {
        try {
          if (err) {
            throw err;
          }
        } catch (err) {
          next(err);
        }
      });
    });
  } catch (err) {
    next(err);
  }
});

router.get("/multiply", (req, res) => {
  const { multiplied, multiplier } = req.query;
  const result = multiply(multiplied, multiplier);
  res.send(`${result}`);
});

module.exports = router;
