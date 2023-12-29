import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connetctionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MOngoDB connected !! DB Host: ${connetctionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Mongo DB connetction Failed", error);
    process.exit(1);
  }
};

export default connectDB;
