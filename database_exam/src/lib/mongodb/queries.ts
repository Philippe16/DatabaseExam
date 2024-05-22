import connectMongo from "./config";
import User from "./models/User"; // Assume you have a User model defined

export const getUsers = async () => {
  await connectMongo();
  return User.find({});
};
