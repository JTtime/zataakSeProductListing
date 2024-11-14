import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';


const uri = process.env.MONGODB_URI || "mongodb+srv://jeevrajvjti:AYv4AeAsrGAfIwxv@cluster0.e15ft.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

if (!uri) {
  throw new Error("MONGODB_URI is not defined in .env.local");
}

const client = new MongoClient(uri);


const applyPagination = (query: any, limit: number, skip: number) => {
  return query.limit(limit).skip(skip); 
};


export async function GET(request: Request) {
  const url = new URL(request.url);
  const limit = parseInt(url.searchParams.get('limit') || '10', 10); 
  const skip = parseInt(url.searchParams.get('skip') || '0', 10); 

  try {
    
    await client.connect();
    const database = client.db("productAll");
    const collection = database.collection("productListDummy");

    
    const query = collection.find({}); 
    const products = await applyPagination(query, limit, skip).toArray();

    
    return NextResponse.json({ products });
  } catch (error) {
    console.error(error);
    
    return NextResponse.json({ error }, { status: 500 });
  } finally {
    
    await client.close();
  }
}


export async function POST(request: Request) {
  try {
    
    const { selectedCategories, availability, priceRange, limit = 10, skip = 0 } = await request.json();

    
    if (!Array.isArray(selectedCategories)) {
      return NextResponse.json(
        { error: "selectedCategories must be an array of strings" },
        { status: 400 }
      );
    }

    
    let query: any = {};

    if (selectedCategories.length > 0) {
      query.category = { $in: selectedCategories };
    }

    if (availability?.length) {
      query.availabilityStatus =  { $in: availability };
      console.log('query', query)
    }

    if (priceRange && priceRange.length === 2) {
      const [minPrice, maxPrice] = priceRange;
      query.price = { $gte: minPrice, $lte: maxPrice }; 
    }

   

    
    await client.connect();
    const database = client.db("productAll"); 
    const collection = database.collection("productdummy"); 

    
    const products = await applyPagination(collection.find(query), limit, skip).toArray();

    
    return NextResponse.json({ products });
  } catch (error) {
    console.error(error);
    
    return NextResponse.json({ error }, { status: 500 });
  } finally {
    
    await client.close();
  }
}
