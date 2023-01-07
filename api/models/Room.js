import mongoose from "mongoose";
const { Schema, model } = mongoose;

const RoomSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  roomNumbers:[{number:Number,unavaliableDates:{type:[Date]}}]
});

export default model("Room", RoomSchema);
