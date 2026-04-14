import express from 'express';
import { logger } from './src/middleware/logger.js';
import PortRoutes from './src/routes/ports.routes.js';

const app = express();
const port = 5000;
app.use(express.json());

app.use(logger);

app.use("/ports", PortRoutes)

app.listen(port, () => {
    console.log(`server is running on ${port}`);
})