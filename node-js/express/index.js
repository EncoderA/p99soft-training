import express from 'express';
import productsRouter from './src/routes/productsRoute.js';
import { logger } from './src/middleware/logger.js';

const app = express();
const port = 5000;

app.use(logger);
app.use(express.json());

app.use("/products", productsRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})  

