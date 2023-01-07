import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/user.js";
import { verifyToken,verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkToken", verifyToken, (req, res, next) => {
  res.send("hello user, you are logged in");
});
router.get("/checkUser/:id", verifyUser, (req, res, next) => {
  res.send("hello user, you can update/delete the account");
});
router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
  res.send("hello admin");
});

//update
router.put("/:id", updateUser);

//delete
router.delete("/:id", deleteUser);

//get User
router.get("/:id", getUser);

//get all User
router.get("/", getAllUsers);

export default router;
