import { data } from "../data/ports.data.js"

export const getAllPorts = (req, res, next) => {
    const { country, port_role, status, page, size } = req.query;

    let filteredData = [...data];
    // const err = new Error("An error occurred while processing your request.");
    // err.statusCode = 400;
    // return next(err);

    { country ? filteredData = filteredData.filter(p => p.country.toLowerCase() === country.toLowerCase()) : null }
    { port_role ? filteredData = filteredData.filter(p => p.port_role.toLowerCase() === port_role.toLowerCase()) : null }
    { status ? filteredData = filteredData.filter(p => p.status.toLowerCase() === status.toLowerCase()) : null }
    { page || size ? filteredData = filteredData : null }

    const pageNum = Math.max(1, parseInt(req.query.page) || 1);
    const pageSize = Math.max(1, parseInt(req.query.size) || 10);
    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const startIndex = (pageNum - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    res.json({
        success: true,
        data: filteredData.slice(startIndex, endIndex),
        pagination: {
            totalItems,
            totalPages,
            currentPage: pageNum,
            pageSize
        }
    });
}

export const getPortById = (req, res) => {
    const unlocode = req.params.unlocode;
    const ports = data.find(p => p.unlocode.toLowerCase() === unlocode.toLowerCase());
    if (ports) {
        res.json({
            success: true,
            data: ports
        });
    } else {
        res.status(404).json({ message: "Port not found" });
    }
}

export const addPort = (req, res) => {
    const { unlocode, country, name, port_role, status } = req.body;

    if (unlocode === undefined || country === undefined || name === undefined || port_role === undefined || status === undefined) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        })
    }

    const port = data.find(p => p.unlocode === unlocode);
    if (port) {
        res.status(409).json({
            success: false,
            message: "Data already exits"
        })
    }
    data.push({ unlocode, country, name, port_role, status })
    res.status(201).json({
        success: true,
        message: "Data added succesfully",
        data: { unlocode, country, name, port_role, status }
    })
}

export const deletePort = (req, res) => {
    const unlocode = req.params.unlocode;

    const port = data.find(p => p.unlocode === unlocode);

    if (port) {
        data.splice(data.indexOf(port), 1);
        res.json({
            success: true,
            message: "data deleted successfully."
        })
    } else {
        res.status(404).json({
            success: false,
            message: "data not found"
        })
    }
}