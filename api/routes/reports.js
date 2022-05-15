const { Router } = require("express");
const { check } = require("express-validator");
const { getReports, getReport, createReport } = require("../controllers/report");

const { validateJWT } = require("../middlewares/validate-jwt");
const { validation } = require("../middlewares/validation");



// All routes will be valiated by the middleware validateJWT
const router = Router();
router.use(validateJWT);

// Get all reports
router.get("/", getReports);

// Get report by id
router.get("/:id", getReport);

// Create a new report
router.post("/add", [
    check("title", "Title is required").not().isEmpty(),
    check("text", "Text is required").not().isEmpty(),
    check("files", "Files are required").not(),
    check("destination", "Destination is required").not().isEmpty(),
    check("user", "User is required").not().isEmpty(),
    validation
], createReport);

module.exports = router;