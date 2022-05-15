const { response } = require('express');
const Comment = require('../models/Comment');

const getComments = async (req, res = response) => {
    try {

        // get comments by id destination

        const { id } = req.params;
        const comments = await Comment.find({
            destination: id
        });

        return res.status(200).json({
            ok: true,
            comments
        });


    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: "Error in the server",
        });
    }
}

const createComment = async (req, res = response) => {
    try {

        // create Comment
        const comment = new Comment(req.body);
        await comment.save();
        return res.status(200).json({
            ok: true,
            comment
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: "Error in the server",
        });
    }
}

const updateComment = async (req, res = response) => {
    try {
        // get id Comment from params
        const { id } = req.params;

        // search Comment by id
        const comment = await Comment.findById(id);

        // if Comment is null, return not found
        if (!comment) {
            return res.status(400).json({
                ok: false,
                message: "Comment not found"
            });
        }

        // if user id is not the same as the Comment user, return unauthorized
        if(req._id !== comment.user.toString()) {
            return res.status(400).json({
                ok: false,
                message: "User not authorized"
            });
        }

        // update Comment
        await comment.updateOne(req.body);
        return res.status(200).json({
            ok: true,
            comment
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: "Error in the server",
        });
    }
}

const deleteComment = async (req, res = response) => {
    try {
        // get id Comment from params
        const { id } = req.params;

        // search Comment by id
        const comment = await comment.findById(id);

        // if Comment is null, return not found
        if (!comment) {
            return res.status(400).json({
                ok: false,
                message: "Comment not found"
            });
        }

        // if user id is not the same as the Comment user, return unauthorized
        if(req._id !== comment.user.toString()) {
            return res.status(400).json({
                ok: false,
                message: "User not authorized"
            });
        }

        // delete Comment
        await comment.deleteOne();        
        return res.status(200).json({
            ok: true,
            message: "Comment deleted"
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: "Error in the server",
        });
    }
}

module.exports = {
    getComments,
    createComment,
    updateComment,
    deleteComment
}