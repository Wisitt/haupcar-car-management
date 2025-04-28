import { PrismaClient }from '@prisma/client';
import { Car } from '../types/car';

const prisma = new PrismaClient();

export const carService = {
    getAllCars: async (opts?: { skip?: number; take?: number }) => {
        return prisma.car.findMany({
          skip: opts?.skip,
          take: opts?.take,
          orderBy: { id: 'asc' },
        });
    },
    
    getCarById: async (id: number) => {
        return await prisma.car.findUniqueOrThrow({
        where: { id },
        });
    },
    
    createCar: async (data: Omit<Car, 'id'>) => {
        return prisma.car.create({ data });
    },
    
    updateCar: async (id: number, carData:Car) => {
        return await prisma.car.update({
        where: { id },
        data: { ...carData, id: undefined },
        });
    },
    
    deleteCar: async (id:number) => {
        return await prisma.car.delete({
        where: { id },
        });
    },
};