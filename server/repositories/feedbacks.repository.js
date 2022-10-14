import { getDb, getFeedbacksCollection } from "../db/conn";

class FeedbacksRepository {
  async findAll() {
    const feedbacksCollection = await getFeedbacksCollection();
    console.log(feedbacksCollection);
    return feedbacksCollection;
  }

  findOne(id) {
    return this.feedbacks.find((feedback) => feedback.id === id) || null;
  }

  save(feedback) {
    const index = this.feedbacks.findIndex(({ id }) => feedback.id === id);

    if (index !== -1) {
      this.feedbacks[index] = feedback;
    }

    this.notes.push(feedback);
  }
}

export const feedbacksRepository = new FeedbacksRepository();
