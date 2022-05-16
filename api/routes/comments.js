const { Router } = require("express");
const { check } = require("express-validator");
const { getComments, createComment, deleteComment, updateComment } = require("../controllers/comment");

const { validateJWT } = require("../middlewares/validate-jwt");
const { validation } = require("../middlewares/validation");



// All routes will be valiated by the middleware validateJWT
const router = Router();
router.use(validateJWT);


// Get Comment by id
router.get("/:id", getComments);

// Create a new Comment
router.post("/add", [
    check("title", "Title is required").not().isEmpty(),
    check("text", "Text is required").not().isEmpty(),
    check("score", "Score is required").not().isNumeric(),
    check("destination", "Destination is required").not().isEmpty(),
    check("user", "User is required").not().isEmpty(),
    validation
], createComment);

// Update Comment
router.put("/update/:id", [
    check("title", "Title is required").not().isEmpty(),
    check("text", "Text is required").not().isEmpty(),
    check("score", "Score is required").not().isNumeric(),
    check("destination", "Destination is required").not().isEmpty(),
    check("user", "User is required").not().isEmpty(),
    validation
], updateComment)

// Delete Comment
router.delete("/delete/:id", deleteComment);

module.exports = router;