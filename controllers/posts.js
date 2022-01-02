import jwt from "jsonwebtoken"
import Post from "../models/Post.js"

//Authorization: Bearer <token>
export const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers["authorization"]

    if (typeof bearerHeader !== "undefined") {
        const bearerToken = bearerHeader.split(" ")[1]
        req.token = bearerToken
        next()

    } else {
        res.sendStatus(403)
    }
}

export const createPost = async (req, res) => {
    try {
        jwt.verify(req.token, "secretkey", (error, authData) => {
            if (error) {
                res.sendStatus(403)
            } else {
                res.json({
                    message: "Post creado",
                    authData: authData
                })
            }
        })

    } catch (error) {
        res.status(404).json({ error: "Cannot post user" })
    }
}