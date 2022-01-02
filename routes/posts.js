import express from "express";
import { createPost, verifyToken } from "../controllers/posts.js";

const router = express.Router()

router.post("/", verifyToken, createPost)

export default router