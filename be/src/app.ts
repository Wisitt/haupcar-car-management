import express from 'express';
import cors from 'cors';
import carRoutes from './routes/car.routes';

const app = express();
app.use(cors({
    origin: ['http://localhost:5173', ''],
    credentials: true
  }));
app.use(express.json());
app.use("/api/cars", carRoutes);

app.get('/', (_req, res) => {
    res.send('Server is running!');
});

export default app;