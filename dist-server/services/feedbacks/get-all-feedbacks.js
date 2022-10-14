"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllFeedbacks = void 0;
var _feedbacks = require("../../repositories/feedbacks.repository");
var getAllFeedbacks = function getAllFeedbacks() {
  return _feedbacks.feedbacksRepository.findAll();
};
exports.getAllFeedbacks = getAllFeedbacks;