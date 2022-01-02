import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config()

import usersRoutes from "./routes/users.js"
import authRoutes from "./routes/auth.js"
import postRoutes from "./routes/posts.js"

mongoose
.connect(
    process.env.ATLAS_URI, {
        useNewUrlParser: true, useUnifiedTopology: true
    }
)
.then(() => {
    const app = express()
    const PORT = process.env.PORT || 5000

    app.use(express.json())
    app.use("/api/users", usersRoutes)
    app.use("/api/auth", authRoutes)
    app.use("/api/posts", postRoutes)

    app.listen(PORT, () => {
        console.log("ok")
    })
})