import React from "react";
import { Table, Button, Space, Card, Typography, Empty, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Car } from "../types/car";

const { Title } = Typography;

interface CarListProps {
  cars: Car[];
  editCar: (car: Car) => void;
  deleteCar: (id: number) => void;
  loading?: boolean;
}

const CarList: React.FC<CarListProps> = ({ 
  cars, 
  editCar, 
  deleteCar,
  loading = false
}) => {
  const columns = [
    {
      title: "Registration",
      dataIndex: "registration",
      key: "registration",
      sorter: (a: Car, b: Car) => a.registration.localeCompare(b.registration),
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
      sorter: (a: Car, b: Car) => a.brand.localeCompare(b.brand),
    },
    {
      title: "Model",
      dataIndex: "model",
      key: "model",
      sorter: (a: Car, b: Car) => a.model.localeCompare(b.model),
    },
    {
      title: "Notes",
      dataIndex: "notes",
      key: "notes",
      ellipsis: true,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_text: string, record: Car) => (
        <Space size="middle">
          <Button 
            type="primary" 
            icon={<EditOutlined />} 
            onClick={() => editCar(record)}
            size="small"
          >
            แก้ไข
          </Button>
          <Popconfirm 
            title=""
            description="คุณแน่ใจว่าต้องการลบรถคันนี้ใช่ไหม?"
            onConfirm={() => deleteCar(record.id)}
            okText="ใช่"
            cancelText="ไม่ใช่"
          >
            <Button 
              danger 
              icon={<DeleteOutlined />}
              size="small"
            >
              ลบ
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Card className="car-list-card" bordered={false}>
      <Title level={4} className="card-title">Car Inventory</Title>
      <Table
        dataSource={cars}
        columns={columns}
        rowKey="id"
        pagination={{ pageSize: 5 }}
        loading={loading}
        locale={{
          emptyText: <Empty description="ไม่พบรถยนต์" />,
        }}
        className="car-table"
      />
    </Card>
  );
};

export default CarList;