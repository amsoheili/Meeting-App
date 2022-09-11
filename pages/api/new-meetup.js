import { MongoClient, ServerApiVersion } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const uri =
      "mongodb+srv://soheili:soheili@cluster0.gvxtnwo.mongodb.net/meetups?retryWrites=true&w=majority";

    const client = await MongoClient.connect(uri);

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Data inserted!" });
  }
};

export default handler;
