import { Router } from "express";
import { getAllCars, getCarById, addCar, editCar, deleteCar } from "../controllers/car.controller";

const carRoutes = Router();
carRoutes.get("/", getAllCars);
carRoutes.get("/:id", getCarById);
carRoutes.post("/", addCar);
carRoutes.put("/:id", editCar);
carRoutes.delete("/:id", deleteCar);

export default carRoutes;
