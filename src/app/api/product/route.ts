import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

// Load MongoDB URI from environment variables
const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI is not defined in .env.local");
}

const client = new MongoClient(uri);

// Helper function to apply pagination
const applyPagination = (query, limit: number, skip: number) => {
  return query.limit(limit).skip(skip); // Apply limit and skip
};

// GET handler for fetching all products with pagination from MongoDB
export async function GET(request: Request) {
  const url = new URL(request.url);
  const limit = parseInt(url.searchParams.get('limit') || '10', 10); // Default to 10 items per page
  const skip = parseInt(url.searchParams.get('skip') || '0', 10); // Default to skip 0 (first page)

  try {
    // Connect to MongoDB
    await client.connect();
    const database = client.db("productAll"); // Replace with your actual database name
    const collection = database.collection("productListDummy"); // Replace with your collection name

    // Fetch all products with pagination
    const query = collection.find({}); // Empty query to fetch all products
    const products = await applyPagination(query, limit, skip).toArray();

    // Return products as JSON response
    return NextResponse.json({ products });
  } catch (error) {
    console.error(error);
    // Return error response
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    // Ensure the client connection is closed after request
    await client.close();
  }
}

// POST handler for fetching filtered products based on selected categories with pagination
export async function POST(request: Request) {
  try {
    // Parse the JSON body from the request
    const { selectedCategories, limit = 10, skip = 0 } = await request.json();

    // Validate selectedCategories
    if (!Array.isArray(selectedCategories)) {
      return NextResponse.json(
        { error: "selectedCategories must be an array of strings" },
        { status: 400 }
      );
    }

    // MongoDB query to filter products by selected categories
    let query = {};

    if (selectedCategories.length > 0) {
      // Ensure the category field name in your DB is correct
      query = { "category": { $in: selectedCategories } };
    }

    // Connect to MongoDB
    await client.connect();
    const database = client.db("productAll"); // Replace with your actual database name
    const collection = database.collection("productdummy"); // Replace with your collection name

    // Apply pagination
    const products = await applyPagination(collection.find(query), limit, skip).toArray();

    // Return products as JSON response
    return NextResponse.json({ products });
  } catch (error) {
    console.error(error);
    // Return error response
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    // Ensure the client connection is closed after request
    await client.close();
  }
}
