import axios from 'axios';
import { Car } from '../types/car';
import { CarInput } from '../validation/carSchema';

const API_URL = 'http://localhost:3001/cars';


export const carService = {
    getAllCars: async (): Promise<Car[]> => {
        const response = await axios.get(API_URL);
        return response.data;
    },

    getCarById: async (id:number): Promise<Car> => {
        const response = await axios.get<Car>(`${API_URL}/${id}`);
        return response.data;
    },

    createCar: async (carData:CarInput): Promise<Car> => {
        const response = await axios.post<Car>(API_URL, carData);
        return response.data;
    },

    updateCar: async (id:number, carData:CarInput): Promise<Car> => {
        const response = await axios.put<Car>(`${API_URL}/${id}`, carData);
        return response.data;
    },

    deleteCar: async (id:number):Promise<void> => {
        await axios.delete(`${API_URL}/${id}`);
    },
};