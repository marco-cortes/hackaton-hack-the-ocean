const { response } = require('express');
const Report = require('../models/Report');

const getReports = async (req, res = response) => {
    try {
        // get all Reports
        const reports = await Report.find();

        const role = req.role;
        
        if (role !== 'ADMIN_ROLE') {
            return res.status(400).json({
                ok: false,
                message: "User not authorized"
            });
        }

        // if role user is admin, return all Reports
        return res.status(200).json({
            ok: true,
            reports
        });


    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: "Error in the server",
        });
    }
}

const getReport = async (req, res = response) => {
    try {
        // search Report by id
        const role = req.role;
        const { id } = req.params;
        const report = await Report.findById(id);

        // if Report is null, return not found
        if (!report) {
            return res.status(400).json({
                ok: false,
                message: "Report not found"
            });
        }

        // if user role is not admin return unauthorized

        if (role !== 'ADMIN_ROLE') {
            return res.status(400).json({
                ok: false,
                message: "User not authorized"
            });
        }

        // if role user is admin, return all Reports
        return res.status(200).json({
            ok: true,
            report
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: "Error in the server",
        });
    }
}

const createReport = async (req, res = response) => {
    try {
    
        // get user of the request
        const role = req.role;

        // if user role is not user, return unauthorized
        if (role !== 'USER_ROLE') {
            return res.status(400).json({
                ok: false,
                message: "User not authorized"
            })
        }

        // create Report
        const report = new Report(req.body);
        await report.save();
        return res.status(200).json({
            ok: true,
            report
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: "Error in the server",
        });
    }
}


module.exports = {
    getReports,
    getReport,
    createReport
}