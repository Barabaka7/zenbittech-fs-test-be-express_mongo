"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;
var _express = require("express");
var router = (0, _express.Router)();

/* GET home page. */
exports.router = router;
router.get("/", function (req, res, next) {
  res.send("This is a feedback management server.");
});