import { useEffect, useState } from "react";
import { Layout, Modal, Row, Col, Typography, message } from "antd";
import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import { Car } from "./types/car";
import { carService } from "./services/carService";
import './App.css';

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  const [cars, setCars] = useState<Car[]>([]);
  const [carToEdit, setCarToEdit] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const fetchCars = async () => {
    setLoading(true);
    try {
      const data = await carService.getAllCars();
      setCars(data);
    } catch {
      messageApi.error("ไม่สามารถดึงข้อมูลได้");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const handleAddCar = async (car: Car) => {
    setCars(prev => [...prev, car]);
    messageApi.success("เพิ่มเรียบร้อย");
    await fetchCars();
  };

  const handleUpdateCar = async (car: Car) => {
    setCars(prev => prev.map(c => c.id === car.id ? car : c));
    messageApi.success("อัปเดตเรียบร้อย");
    closeModal();
    await fetchCars();
  };

  const openModal = (car: Car) => {
    setCarToEdit(car);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCarToEdit(null);
    setIsModalOpen(false);
  };

  const handleDeleteCar = async (id: number) => {
    try {
      await carService.deleteCar(id);
      setCars(prev => prev.filter(car => car.id !== id));
      messageApi.success("ลบเรียบร้อย");
    } catch (error) {
      messageApi.error("ลบไม่สำเร็จ");
      console.error("Error deleting car:", error);
    }
  };

  return (
    <Layout className="layout">
      {contextHolder}
      <Header className="header">
        <div className="logo" />
        <Title level={2} className="header-title">Car Management System</Title>
      </Header>
      <Content className="content">
        <Row gutter={[24, 24]} className="main-container">
          <Col xs={24} lg={8}>
            <CarForm 
              addCar={handleAddCar} 
              updateCar={handleUpdateCar} 
            />
          </Col>
          <Col xs={24} lg={16}>
            <CarList 
              cars={cars} 
              editCar={openModal} 
              deleteCar={handleDeleteCar}
              loading={loading}
            />
          </Col>
        </Row>
      </Content>
      <Modal
        open={isModalOpen}
        onCancel={closeModal}
        footer={null}
        destroyOnClose
        centered
        style={{padding: 0}}
      >
        {carToEdit && (
          <CarForm
            initialData={carToEdit}
            addCar={handleAddCar} 
            updateCar={handleUpdateCar}
          />
        )}
      </Modal>
    </Layout>
  );
}

export default App;