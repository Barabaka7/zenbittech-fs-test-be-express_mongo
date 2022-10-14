"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addOneFeedback = void 0;
var _feedbacks = require("../../repositories/feedbacks.repository");
var addOneFeedback = function addOneFeedback(feedback) {
  _feedbacks.feedbacksRepository.save(feedback);
  return feedback;
};
exports.addOneFeedback = addOneFeedback;