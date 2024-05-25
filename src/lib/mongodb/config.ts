import mongoose from "mongoose";

const connectMongo = async (): Promise<typeof mongoose> => {
  if (mongoose.connection.readyState >= 1) return mongoose;

  return mongoose.connect(process.env.MONGODB_URI as string);
};

export default connectMongo;
