import { feedbacksRepository } from "../../repositories/feedbacks.repository";

export const addOneFeedback = (feedback) => {
  feedbacksRepository.save(feedback);
  return feedback;
};
