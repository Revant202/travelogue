import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to MongoDB!")
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected")
})
mongoose.connection.on("connected", () => {
  console.log("mongoDB connected");
});

app.get("/",(req,res)=>{
    res.send("hello guyz")
})

app.listen(8000, () => {
  connect();
  console.log("connected to API!");
});
