const jwt = require("jsonwebtoken");

const { response } = require("express");

const validateJWT = (req, res = response, next) => {
    
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({
            ok: false,
            message: "Token not found"
        });
    }
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req._id = payload._id;
        req.name = payload.name;
        req.role = payload.role;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            ok: false,
            message: "Token invalid"
        });
    }
}

module.exports = {
    validateJWT
}