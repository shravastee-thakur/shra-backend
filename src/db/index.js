import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    
  } catch (error) {
    console.log("MONGODB connection failed", error);
    process.exit(1);
  }
};