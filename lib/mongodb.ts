import { MongoClient } from 'mongodb';

let cachedClient: MongoClient | null = null;

export async function connectToDatabase() {
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB || 'portfolio';

  if (!uri) {
    throw new Error('Missing MONGODB_URI environment variable');
  }

  if (cachedClient) {
    return cachedClient.db(dbName);
  }

  const client = new MongoClient(uri);
  await client.connect();
  cachedClient = client;
  return client.db(dbName);
}
