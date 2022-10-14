import { feedbacksRepository } from "../../repositories/feedbacks.repository";

export const getAllFeedbacks = () => {
  return feedbacksRepository.findAll();
};
