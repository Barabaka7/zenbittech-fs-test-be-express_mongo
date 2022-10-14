import { Router } from "express";

const router = Router();

/* GET feedbacks listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource!!!##");
});

router.post("/", (req, res, next) => {
  try {
    //  const newFeedback = addOneFeedback(req.body);
    res.status(201).send(newFeedback);
  } catch (error) {
    next(error);
  }
});

export { router };
