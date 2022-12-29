import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello guyz");
});

export default router;
