const Comment= require("../models/comment");
// Get comments


  // Get comments, filter by postId if provided
const getComments = async (req, res) => {
    try {
        const { postId } = req.query;

        // If postId is provided, filter by it; otherwise, return all comments
        const filter = postId ? { postId } : {};
        const comments = await Comment.find(filter);

        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const createComment = async (req, res) => {
    try {
        const { postId , content, senderId} = req.body;

        const newComment = await Comment.create({ postId, content, author });
        res.status(201).json(newComment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a comment
const updateComment = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedComment = await Comment.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedComment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports={
    getComments,
    createComment,
    updateComment,

}