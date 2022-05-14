const { response } = require('express');
const Destination = require('../models/Destination');

const getDestinations = async (req, res = response) => {
    try {

        const role = req.role;

        // if role user is user, return only the destinations that are public
        if (role === 'USER_ROLE') {
            const destinations = await Destination.find({
                status: 'ACCEPTED'
            });
            return res.status(200).json({
                ok: true,
                destinations: destinations.filter(destination => destination.status === 'ACCEPTED')
            });
        }

        // if role user is owner, return his destinations
        if (role === 'OWNER_ROLE') {
            const destinations = await Destination.find({
                user: req._id
            });
            return res.status(200).json({
                ok: true,
                destinations: destinations.filter(destination => destination.user === user._id)
            });
        }

        // if role user is admin, return all destinations
        const destinations = await Destination.find();
        return res.status(200).json({
            ok: true,
            destinations
        });


    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: "Error in the server",
        });
    }
}

const getDestination = async (req, res = response) => {
    try {

        // search destination by id
        const role = req.role;
        const { id } = req.params;
        const destination = await Destination.findById(id);

        // if destination is null, return not found
        if (!destination) {
            return res.status(400).json({
                ok: false,
                message: "Destination not found"
            });
        }

        // if role user is user, only return the destinations that are public

        if (role === 'USER_ROLE' && destination.status !== 'ACCEPTED') {
            return res.status(400).json({
                ok: false,
                message: "Unauthorized"
            });
        }
        
        // if role user is owner, only return his destinations
        if(role === 'OWNER_ROLE' && destination.user.toString() !== req._id) {
            return res.status(400).json({
                ok: false,
                message: "Unauthorized"
            });
        }

        // if role user is admin, return all destinations
        return res.status(200).json({
            ok: true,
            destination
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: "Error in the server",
        });
    }
}

const createDestination = async (req, res = response) => {
    try {
    
        // get user of the request
        const role = req.role;

        // if user role is not owner, return unauthorized
        if (role !== 'OWNER_ROLE') {
            return res.status(400).json({
                ok: false,
                message: "User not authorized"
            })
        }

        // create destination
        const destination = new Destination(req.body);
        await destination.save();
        return res.status(200).json({
            ok: true,
            destination
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: "Error in the server",
        });
    }
}

const updateDestination = async (req, res = response) => {
    try {
        // get id destination from params
        const { id } = req.params;

        // search destination by id
        const destination = await Destination.findById(id);

        // if destination is null, return not found
        if (!destination) {
            return res.status(400).json({
                ok: false,
                message: "Destination not found"
            });
        }

        // get user of the request
        const role = req.role;

        // if user role is not owner, return unauthorized
        if (role !== 'OWNER_ROLE') {
            return res.status(400).json({
                ok: false,
                message: "User not authorized"
            });
        }
        // if user id is not the same as the destination user, return unauthorized
        if(req._id !== destination._doc.user.toString()) {
            return res.status(400).json({
                ok: false,
                message: "User not authorized"
            });
        }

        // update destination
        await destination.updateOne(req.body);
        return res.status(200).json({
            ok: true,
            destination
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: "Error in the server",
        });
    }
}

const deleteDestination = async (req, res = response) => {
    try {
        // get id destination from params
        const { id } = req.params;

        // search destination by id
        const destination = await Destination.findById(id);

        // if destination is null, return not found
        if (!destination) {
            return res.status(400).json({
                ok: false,
                message: "Destination not found"
            });
        }

        // get user of the request
        const role = req.role;

        // if user role is not owner, return unauthorized
        if (role !== 'OWNER_ROLE') {
            return res.status(400).json({
                ok: false,
                message: "User not authorized"
            });
        }

        // if user id is not the same as the destination user, return unauthorized
        if(req._id !== destination.user.toString()) {
            return res.status(400).json({
                ok: false,
                message: "User not authorized"
            });
        }

        // delete destination
        await destination.deleteOne();        
        return res.status(200).json({
            ok: true,
            message: "Destination deleted"
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: "Error in the server",
        });
    }
}

const changeStatus = async (req, res = response) => {
    try {
        // get id destination from params
        const { id } = req.params;

        // search destination by id
        const destination = await Destination.findById(id);

        // if destination is null, return not found
        if (!destination) {
            return res.status(400).json({
                ok: false,
                message: "Destination not found"
            });
        }

        // get user of the request
        const role = req.role;

        // if user role is not admin, return unauthorized
        if (role !== 'ADMIN_ROLE') {
            return res.status(400).json({
                ok: false,
                message: "User not authorized"
            });
        }

        // update destination status

        await destination.updateOne({
            status: req.body.status
        });

        return res.status(200).json({
            ok: true,
            destination
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: "Error in the server",
        });
    }
}

module.exports = {
    getDestinations,
    getDestination,
    createDestination,
    updateDestination,
    deleteDestination,
    changeStatus
}