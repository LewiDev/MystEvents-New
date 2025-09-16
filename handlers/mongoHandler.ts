import mongoose from 'mongoose';

/**
 * Handles the connection to the MongoDB database using Mongoose.
 * The connection string is expected to be provided via the MONGO_URI environment variable.
 */
export async function connectDb(): Promise<void> {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    throw new Error('MONGO_URI environment variable is not defined.');
  }
  try {
    await mongoose.connect(uri);
    console.log('\u2705 Connected to MongoDB');
  } catch (error) {
    console.error('\u274C Failed to connect to MongoDB', error);
    throw error;
  }
}
