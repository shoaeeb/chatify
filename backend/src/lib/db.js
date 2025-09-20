import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI;
    if (!MONGO_URI) {
      throw new ERROR("MONGO_URI is not set");
    }
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB CONNECTION: ", conn.connection.host);
  } catch (error) {
    console.error("Error connection to MONGODB: ", error);
  }
};
