import {
  getDb,
  getFeedbacksCollection,
  sendFeedbackToCollection,
} from "../db/conn";

class FeedbacksRepository {
  async findAll() {
    const feedbacksCollection = await getFeedbacksCollection();
    console.log(feedbacksCollection);
    return feedbacksCollection;
  }

  findOne(id) {
    return this.feedbacks.find((feedback) => feedback.id === id) || null;
  }

  async save(feedback) {
    const newFeedback = await sendFeedbackToCollection(feedback);
    console.log(newFeedback);
    return newFeedback;
  }
}

export const feedbacksRepository = new FeedbacksRepository();
