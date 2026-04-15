import express from 'express';
import { logger } from './src/middleware/logger.js';
import { errorHandler } from './src/utils/apiError.js';
import PortRoutes from './src/routes/ports.routes.js';

const app = express();
const port = 5000;

app.use(express.json());
app.use(logger);
app.use("/ports", PortRoutes)
app.use(errorHandler);
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    })
});

app.listen(port, () => {
    console.log(`server is running on ${port}`);
})