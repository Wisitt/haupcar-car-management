import { Request,Response } from "express";
import {carService} from "../services/car.service";


export const getAllCars = async (_req: Request, res: Response) => {
    const cars = await carService.getAllCars();
    res.status(200).json(cars);
}

export const getCarById = async (req: Request, res: Response) => {
    const car = await carService.getCarById(Number(req.params.id));
    res.status(200).json(car);
}

export const addCar = async (req: Request, res: Response) => {
    const car = await carService.createCar(req.body);
    res.status(201).json(car);
}

export const editCar = async (req: Request, res: Response) => {
    const car = await carService.updateCar(Number(req.params.id), req.body);
    res.status(200).json(car);
}

export const deleteCar = async (req: Request, res: Response) => {
    await carService.deleteCar(Number(req.params.id));
    res.status(204).send();
}
