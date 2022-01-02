import bcrypt from "bcrypt"
import User from "../models/User.js"

export const getUsers = async (req, res) => {
    try {
        const Users = await User.find()
        res.json(Users)

    } catch (error) {
        res.status(404).json({ error: "Cannot get all users" })
    }
}

export const postUser = async (req, res) => {
    try {
        const body = req.body
        const newUser = new User(body)

        const salt = await bcrypt.genSalt(10)
        newUser.password = await bcrypt.hash(newUser.password, salt)

        await newUser.save()
        res.json(newUser)

    } catch (error) {
        res.status(404).json({ error: "Cannot post user" })
    }
}

export const getUser = async (req, res) => {
    try {
        const id = req.params.id
        const findUser = await User.findById(id)
        res.json(findUser)
        
    } catch (error) {
        res.status(404).json({ error: "User does not exist" })
    }
}

export const updateUser = async (req, res) => {
    try {
        const id = req.params.id
        const findUser = await User.findById(id)

        if (req.body.username) {
            findUser.username = req.body.username
        }

        if (req.body.email) {
            findUser.email = req.body.email
        }

        await findUser.save()
        res.json(findUser)

    } catch (error) {
        res.status(404).json({ error: "User does not exist" })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const findUser = await User.findByIdAndDelete(id)
        res.json(`User ${findUser.username} deleted`)

    } catch (error) {
        res.status(404).json({ error: "User does not exist" })
    }
}