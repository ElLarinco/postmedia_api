import mongoose from "mongoose"

const PostSchema = mongoose.Schema({
    title: String,
    content: String
})

const Post = mongoose.model("Post", PostSchema)
export default Post