const { response } = require("express");
const bcrypt = require("bcryptjs");

const User = require("../models/User");

const { generateJWT } = require("../helpers/jwt");

const createUser = async (req, res = response) => {

    try {
        // Search user by email
        let user = await User.findOne({ email: req.body.email });
        // If user exists, return error
        if (user) {
            return res.status(400).json({
                ok: false,
                message: "El usuario ya existe"
            });
        }

        // Create new user
        user = new User(req.body);

        // Hash password
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);

        // Save user
        await user.save();

        // Generate token
        const token = await generateJWT(user._id, user.name, user.role);
        return res.status(200).json({
            ok: true,
            message: "register",
            user: {
                _id: user._doc._id,
                name: user._doc.name,
                lastName: user._doc.lastName,
                email: user._doc.email,
                role: user._doc.role,
            },
            token
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: "Error en el servidor",
        });
    }
}

const login = async (req, res = response) => {
    try {
        // Search user by email
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({
                ok: false,
                message: "Usuario no encontrado"
            });
        }
        // Validate password
        const validPassword = bcrypt.compareSync(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                message: "Contraseña incorrecta"
            });
        }
        // Generate token
        const token = await generateJWT(user._id, user.name, user.role);

        return res.json({
            ok: true,
            message: "login",
            user: {
                _id: user._doc._id,
                name: user._doc.name,
                lastName: user._doc.lastName,
                email: user._doc.email,
                role: user._doc.role,
            },
            token
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: "Error en el servidor",
        });
    }
}

const updateUser = async (req, res = response) => {
    try {
        // get id user from params
        const { id } = req.params;

        // search user by id
        const user = await User.findById(id);

        // if user is null, return not found
        if (!user) {
            return res.status(400).json({
                ok: false,
                message: "Usuario no encontrado"
            });
        }

        await user.updateOne(req.body);
        return res.status(200).json({
            ok: true,
            user
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: "Error en el servidor",
        });
    }
}

const renew = async (req, res = response) => {
    const id = req._id;
    const name = req.name;
    const role = req.role;

    const token = await generateJWT(id, name, role);

    res.json({
        ok: true,
        message: "renew",
        user: {
            _id: id,
            name: name,
            role: role,
        },
        token
    })
}

module.exports = {
    createUser,
    login,
    renew
}