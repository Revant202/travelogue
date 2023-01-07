import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/user.js";
import {verifyUser, verifyAdmin } from "../utils/verify.js";

const router = express.Router();

// router.get("/checkToken", verifyToken, (req, res, next) => {
//   res.send("hello user, you are logged in");
// });
// router.get("/checkUser/:id", verifyUser, (req, res, next) => {
//   res.send("hello user, you can update/delete the account");
// });
// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello admin");
// });

//update
router.put("/:id",verifyUser,updateUser);

//delete
router.delete("/:id", verifyUser, deleteUser);

//get User
router.get("/:id", verifyUser, getUser);

//get all User
router.get("/", verifyAdmin, getAllUsers);

export default router;
