// pages/api/connect.ts

import { MongoClient } from 'mongodb';

// Access the MongoDB URI from the environment variables
const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI is not defined in .env.local");
}

const client = new MongoClient(uri);

export default async function handler(req, res) {
  try {
    // Connect to MongoDB
    await client.connect();
    const database = client.db("productAll");  // Replace "test" with your database name
    const collection = database.collection("productdummy");

    const products = await collection.find({}).toArray();

    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    // Always close the client connection
    await client.close();
  }
}
