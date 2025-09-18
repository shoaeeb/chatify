import express from "express";

const router = express.Router();
router.get("/signup", (req, res) => {
  res.send("signup endpoint");
});
router.get("/login", (req, res) => {
  res.send("Login Endpoint");
});
router.get("/logout", (req, res) => {
  res.send("Logout endpoint");
});
export default router;
