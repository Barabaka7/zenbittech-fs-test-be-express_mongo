"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addOneFeedback = void 0;
//import { notesRepository } from "../../repositories/notes.repository";

var addOneFeedback = function addOneFeedback(feedback) {
  feedbacksRepository.save(feedback);
  return feedback;
};
exports.addOneFeedback = addOneFeedback;