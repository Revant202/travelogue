import express from "express";
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from "../controllers/hotel.js";


const router = express.Router();

//create
router.post("/", createHotel);

//update
router.put("/:id", updateHotel);

//delete
router.delete("/:id", deleteHotel);

//get hotel
router.get("/:id",getHotel);

//get all hotel
router.get("/", getAllHotels);

export default router;
