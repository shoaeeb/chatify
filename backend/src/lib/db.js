import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB CONNECTION: ", conn.connection.host);
  } catch (error) {
    console.error("Error connection to MONGODB: ", error);
  }
};
