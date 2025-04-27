import React from "react";
import { Car } from "../types/car";

interface CarListProps {
    cars: Car[];
    editCar: (car: Car) => void;
    deleteCar: (id: number) => void;
}

const CarList: React.FC<CarListProps> = ({ cars, editCar, deleteCar }) => {
    return (
        <div>
        <h1>Car List</h1>
        <table>
            <thead>
                <tr>
                    <th>Registration</th>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Notes</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {cars.map((car) => (
                <tr key={car.id}>
                    <td>{car.registration}</td>
                    <td>{car.brand}</td>
                    <td>{car.model}</td>
                    <td>{car.notes}</td>
                    <td>
                        <button onClick={() => editCar(car)}>Edit</button>
                        <button onClick={() => deleteCar(car.id)}>Delete</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
}
export default CarList;

