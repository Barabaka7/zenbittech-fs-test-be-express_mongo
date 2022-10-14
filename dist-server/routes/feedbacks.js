"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;
var _express = require("express");
var router = (0, _express.Router)();

/* GET feedbacks listing. */
exports.router = router;
router.get("/", function (req, res, next) {
  res.send("respond with a resource!!!##");
});
router.post("/", function (req, res, next) {
  try {
    //  const newFeedback = addOneFeedback(req.body);
    res.status(201).send(newFeedback);
  } catch (error) {
    next(error);
  }
});