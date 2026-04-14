import { data } from "../data/ports.data.js"

export const getAllPorts = (req, res) => {
    res.json({
        success: true,
        data: data
    });
}

export const getPortById = (req, res) => {
    const unlocode = req.params.unlocode;
    const ports = data.find(p => p.unlocode === unlocode);
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