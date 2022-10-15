import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";

dotenv.config({
  path: __dirname + "/./../../server/.env." + process.env.NODE_ENV,
});

const connectionString = process.env.ATLAS_URI;

const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function getFeedbacksCollection() {
  let feedbacks = [];
  try {
    await client.connect();
    const fetchData = (client) =>
      client
        .db("zenbittech-test")
        .collection("feedbacks")
        .find({})
        .forEach((doc) => feedbacks.push(doc));
    await fetchData(client);
    return feedbacks;
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

export async function sendFeedbackToCollection(feedback) {
  let newFeedBack = { ...feedback, creation_data: new Date() };
  try {
    await client.connect();
    const postData = (client) =>
      client
        .db("zenbittech-test")
        .collection("feedbacks")
        .insertOne(newFeedBack);
    await postData(client);
    return newFeedBack;
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
