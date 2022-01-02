import jwt from "jsonwebtoken"

export const login = async (req, res) => {
    try {
        const user = {
            username: "test",
            email: "bolas@gmail.com"
        }
        jwt.sign({ user: user }, 'secretkey', { expiresIn: "32s" }, (err, token) => {
            res.json({
                token: token
            })
        })

    } catch (error) {
        res.status(404).json({ error: "Cannot login" })
    }
}