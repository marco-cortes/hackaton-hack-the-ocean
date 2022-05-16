const { Router } = require("express");
const { check } = require("express-validator")

const { createUser, login, renew } = require("../controllers/auth");
const { validateJWT } = require("../middlewares/validate-jwt");
const { validation } = require("../middlewares/validation");

const router = Router();

router.post(
    "/new",
    [
        check("name", "Name is required").not().isEmpty(),
        check("lastName", "Last name is required").not().isEmpty(),
        check("email", "Email is required").isEmail(),
        check("password", "Password must be 6 characters long").isLength({ min: 6 }),
        check("role", "Role is required").not().isEmpty(),
        validation
    ],
    createUser);

router.get("/renew", validateJWT, renew);

router.post(
    "/",
    [
        check("email", "Email is required").isEmail(),
        check("password", "Password must be 6 characters long").isLength({ min: 6 }),
        validation
    ],
    login);

module.exports = router;