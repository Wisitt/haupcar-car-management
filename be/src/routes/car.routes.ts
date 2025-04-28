import { Router } from "express";
import { getAllCars, getCarById, addCar, editCar, deleteCar } from "../controllers/car.controller";
import { CarSchema } from "../schemas/car.schema";
import  validate  from "../middlewares/validate";

const carRoutes = Router();
carRoutes.get("/", getAllCars);
carRoutes.get("/:id", getCarById);
carRoutes.post("/",validate(CarSchema), addCar);
carRoutes.put("/:id", validate(CarSchema),editCar);
carRoutes.delete("/:id", deleteCar);

export default carRoutes;
