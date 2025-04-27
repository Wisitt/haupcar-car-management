import express from 'express';
import cors from 'cors';
import carRoutes from './routes/car.routes';

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/cars", carRoutes);


export default app;