import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URL!);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}
