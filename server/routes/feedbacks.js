import { Router } from "express";
import { getAllFeedbacks } from "../services/feedbacks/get-all-feedbacks";
import { addOneFeedback } from "../services/feedbacks/add-one-feedback";

const router = Router();

/* GET feedbacks listing. */
router.get("/", async (req, res, next) => {
  try {
    const feedbacks = await getAllFeedbacks();
    res.send(feedbacks);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newFeedback = await addOneFeedback(req.body);
    res.status(201).send(newFeedback);
  } catch (error) {
    next(error);
  }
});

export { router };
