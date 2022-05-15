const { Router } = require("express");
const { check } = require("express-validator");

const { getDestinations, getDestination, createDestination, updateDestination, deleteDestination, changeStatus } = require("../controllers/destination");
const { validateJWT } = require("../middlewares/validate-jwt");
const { validation } = require("../middlewares/validation");



// All routes will be valiated by the middleware validateJWT
const router = Router();
router.use(validateJWT);

// Get all destinations
router.get("/", getDestinations);

// Get a destination by id
router.get("/:id", getDestination);

// Create a new destination
router.post("/add", [
    check("name", "Name is required").not().isEmpty(),
    check("description", "Description is required").not().isEmpty(),
    check("contact.phone", "Phone is required").not().isEmpty(),
    check("contact.email", "Email is required").isEmail(),
    check("user", "User is required").not().isEmpty(),
    check("score", "Score is required").not().isEmpty(),
    check("ubication", "Ubication is required").not().isEmpty(),
    check("photos", "Photos is required").not(),
    check("videos", "Videos is required").not(),
    check("recommendations", "Recommendations is required").not(),
    check("activities", "Activities is required").not(),
    check("species", "Species is required").not(),
    validation
], createDestination);

// Update a destination
router.put("/update/:id", [
    check("name", "Name is required").not().isEmpty(),
    check("description", "Description is required").not().isEmpty(),
    check("contact.phone", "Phone is required").not().isEmpty(),
    check("contact.email", "Email is required").isEmail(),
    check("user", "User is required").not().isEmpty(),
    check("score", "Score is required").not().isEmpty(),
    check("ubication", "Ubication is required").not().isEmpty(),
    check("photos", "Photos is required").not(),
    check("videos", "Videos is required").not(),
    check("recommendations", "Recommendations is required").not(),
    check("activities", "Activities is required").not(),
    check("species", "Species is required").not(),
    validation
], updateDestination);

// Delete destination status
router.put("/update/status/:id", [
    check("status", "Status is required").not().isEmpty(),
    validation
], changeStatus);


// Delete a destination
router.delete("/delete/:id", deleteDestination);


module.exports = router;