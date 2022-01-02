import express from "express";
import { deleteUser, getUser, getUsers, postUser, updateUser } from "../controllers/users.js";

const router = express.Router()

router.get("/", getUsers)
router.post("/", postUser)
router.get("/:id", getUser)
router.patch("/:id", updateUser)
router.delete("/:id", deleteUser)

export default router