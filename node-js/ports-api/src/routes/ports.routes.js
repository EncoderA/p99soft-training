import express from 'express';
import { addPort, deletePort, getAllPorts, getPortById } from '../controllers/ports.controller.js';

const router = express.Router();

router.get('/', getAllPorts);
router.get('/:unlocode', getPortById);
router.post('/', addPort);
router.delete('/:unlocode', deletePort);

export default router;