//import { notesRepository } from "../../repositories/notes.repository";

export const addOneFeedback = (feedback) => {
  feedbacksRepository.save(feedback);
  return feedback;
};
