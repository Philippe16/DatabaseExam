import mongoose from "mongoose";

const connection: { isConnected?: number } = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI!);

    connection.isConnected = db.connections[0].readyState;

    if (connection.isConnected === 1) {
      console.log("MongoDB connected successfully.");
    } else {
      console.error("MongoDB connection failed.");
    }
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

export default dbConnect;
