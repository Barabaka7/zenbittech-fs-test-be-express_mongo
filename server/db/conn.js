import { MongoClient } from "mongodb";
//const connectionString = process.env.ATLAS_URI;
const connectionString =
  "mongodb+srv://barabaka:xH9aXqA8NeVhkqS4@cluster0.7ardev1.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// async function getCollection(client) {
//   let feedbacks = [];
//   const feedbackCollection = await client
//     .db("zenbittech-test")
//     .collection("feedbacks");

//   const cursor = feedbackCollection.find({});
//   await cursor.forEach((doc) => feedbacks.push(doc));
//   return feedbacks;
// }

// export const getFeedbacksCollection = async () => {
//   try {
//     await client.connect();
//     const feedbackCollection = await getCollection(client);
//     return feedbackCollection;
//   } catch (e) {
//     console.error(e);
//   } finally {
//     await client.close();
//   }
// };

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

export async function postFeedbackToCollection(feedback) {
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
