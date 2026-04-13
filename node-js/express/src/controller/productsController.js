import { data } from '../modals/productsModal.js';

export const getAllProducts = (req, res) => {
    res.json({products: data});
}

export const getProductById = (req, res) => {
    const id = parseInt(req.params.id);
    const product = data.find(p => p.id === id);
    if (product) {
        res.json({product});
    } else {
        res.status(404).json({message: "Product not found"});
    }   
}

export const createProduct = (req, res) => {    
    const {name, price} = req.body;
    const newProduct = {
        id: data.length + 1,
        name,
        price
    };
    data.push(newProduct);
    res.status(201).json({message: "Product created", product: newProduct});
}
    