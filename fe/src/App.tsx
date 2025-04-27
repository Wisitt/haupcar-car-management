import { useEffect, useState } from "react";
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import { Car } from "./types/car";
import { Modal, Splitter } from "antd";
import { carService } from "./services/carService";
import './App.css'


function App() {
  const [cars, setCars] = useState<Car[]>([]);
  const [carToEdit, setCarToEdit] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchCars = async () => {
    try {
      const data = await carService.getAllCars();
      setCars(data);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };
  useEffect(() => {
    fetchCars();
  }, []);
  const addCar = async () => {
    await fetchCars();
  };
  const updateCar = async() => {
    await fetchCars();
    closeModal();
  }

  const openModal = (car: Car) => {
    setCarToEdit(car);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setCarToEdit(null);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleDeleteCar = async (id: number) => {
    try {
      setCars((prevCars) => prevCars.filter((car) => car.id !== id));
      await carService.deleteCar(id);
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };

 
  
  return (
    <div className="container">
      <h1 className="text-center mb-45">Car Management</h1>
      <Splitter style={{ height: "100%", boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <Splitter.Panel defaultSize="50%" min="20%" max="70%">
          <CarForm addCar={addCar} updateCar={updateCar}/>
        </Splitter.Panel>
        <Splitter.Panel>
          <CarList cars={cars} editCar={openModal} deleteCar={handleDeleteCar} loading={false}/>
        </Splitter.Panel>
      </Splitter>
      <hr style={{ margin: "2rem 0" }} />
      <Modal
        title="Edit Car"
        open={isModalOpen}
        onClose={closeModal}
        footer={null}
        destroyOnClose
        onCancel={handleCancel}
      >
        {carToEdit && (
            <CarForm
              initialData={carToEdit}
              addCar={addCar}
              updateCar={updateCar}
            />
        )}
      </Modal>
    </div>
  );
}

export default App;
