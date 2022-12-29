import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import roomsRoute from "./routes/rooms.js";
import hotelsRoute from "./routes/hotels.js";
import usersRoute from "./routes/users.js"

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

//middlewares
app.use(express.json())
app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/rooms",roomsRoute);
app.use("/api/hotels",hotelsRoute);


app.listen(8000, () => {
  connect();
  console.log("connected to API!");
});
