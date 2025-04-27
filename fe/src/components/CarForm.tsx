import React, { useEffect } from "react";
import { CarInput, CarSchema } from "../validation/carSchema";
import { carService } from "../services/carService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { Car } from "../types/car";
import { 
  Form, 
  Input, 
  Button, 
  Space, 
  Typography, 
  Divider, 
  Row, 
  Col, 
  Card 
} from "antd";
import { 
  CarOutlined, 
  TagOutlined, 
  DatabaseOutlined, 
  SaveOutlined, 
  ReloadOutlined 
} from "@ant-design/icons";

const { Title } = Typography;
const { TextArea } = Input;

interface CarFormProps {
  addCar: (car: Car) => void;
  updateCar: (car: Car) => void;
  initialData?: Car | null;
}

const CarForm: React.FC<CarFormProps> = ({ addCar, updateCar, initialData }) => {
  const { control, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<CarInput>({
    resolver: zodResolver(CarSchema),
    defaultValues: initialData ? {
      registration: initialData.registration,
      brand: initialData.brand,
      model: initialData.model,
      notes: initialData.notes ?? "",
    } : {
      registration: "",
      brand: "",
      model: "",
      notes: ""
    },
  });

  useEffect(() => {
    if (initialData) {
      reset({
        registration: initialData.registration,
        brand: initialData.brand,
        model: initialData.model,
        notes: initialData.notes ?? "",
      });
    }
  }, [initialData, reset]);

  const onSubmitForm = async (data: CarInput) => {
    try { 
      if (initialData) {
        const updatedCar = await carService.updateCar(initialData.id, data);
        updateCar(updatedCar);
      }
      else {
        const newCar = await carService.createCar(data);
        addCar(newCar);
      }
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleReset = () => {
    reset();
  };

  return (
    <Card bordered={false} className="car-form-card">
      <Title level={4}>
        {initialData ? "Update Car Details" : "Enter Car Details"}
      </Title>
      <Divider />
      
      <Form layout="vertical" onFinish={handleSubmit(onSubmitForm)}>
        <Row gutter={16}>
          <Col span={24}>
            <Controller
              name="registration"
              control={control}
              render={({ field }) => (
                <Form.Item 
                  label="Registration Number"
                  validateStatus={errors.registration ? "error" : undefined}
                  help={errors.registration?.message}
                  required
                >
                  <Input
                    {...field}
                    prefix={<TagOutlined />}
                    placeholder="Enter registration number"
                    size="large"
                  />
                </Form.Item>
              )}
            />
          </Col>
        </Row>
        
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Controller
              name="brand"
              control={control}
              render={({ field }) => (
                <Form.Item 
                  label="Brand"
                  validateStatus={errors.brand ? "error" : undefined}
                  help={errors.brand?.message}
                  required
                >
                  <Input
                    {...field}
                    prefix={<CarOutlined />}
                    placeholder="Enter brand"
                    size="large"
                  />
                </Form.Item>
              )}
            />
          </Col>
          <Col xs={24} md={12}>
            <Controller
              name="model"
              control={control}
              render={({ field }) => (
                <Form.Item 
                  label="Model"
                  validateStatus={errors.model ? "error" : undefined}
                  help={errors.model?.message}
                  required
                >
                  <Input
                    {...field}
                    prefix={<DatabaseOutlined />}
                    placeholder="Enter model"
                    size="large"
                  />
                </Form.Item>
              )}
            />
          </Col>
        </Row>
        
        <Row gutter={16}>
          <Col span={24}>
            <Controller
              name="notes"
              control={control}
              render={({ field }) => (
                <Form.Item 
                  label="Notes"
                >
                  <TextArea
                    {...field}
                    placeholder="Enter additional notes"
                    rows={4}
                    showCount
                    maxLength={500}
                  />
                </Form.Item>
              )}
            />
          </Col>
        </Row>
        
        <Divider />
        
        <Space>
          <Button 
            type="primary" 
            htmlType="submit" 
            icon={<SaveOutlined />}
            loading={isSubmitting}
            size="large"
          >
            {initialData ? "Update Car" : "Add Car"}
          </Button>
          <Button 
            onClick={handleReset} 
            icon={<ReloadOutlined />}
            size="large"
          >
            Reset
          </Button>
        </Space>
      </Form>
    </Card>
  );
};

export default CarForm;