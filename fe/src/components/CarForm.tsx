import React from "react";
import { Form, Input, Button, Card } from "antd";
import { Car } from "../types/car";
import { CarInput } from "../validation/carSchema";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CarSchema } from "../validation/carSchema";
import { carService } from "../services/carService";

const { TextArea } = Input;

interface CarFormProps {
  addCar: (car: Car) => void;
  updateCar: (car: Car) => void;
  initialData?: Car | null;
}

const CarForm: React.FC<CarFormProps> = ({ addCar, updateCar, initialData }) => {
  const { 
    control, 
    handleSubmit, 
    reset, 
    formState: { errors, isSubmitting } 
  } = useForm<CarInput>({
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
      notes: "",
    },
  });

  React.useEffect(() => {
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
      } else {
        const newCar = await carService.createCar(data);
        addCar(newCar);
      }
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Card 
      title={initialData ? "แก้ไขรายละเอียดรถ" : "เพิ่มรถใหม่"} 
      className="car-form-card"
      bordered={false}
    >
      <Form 
        layout="vertical" 
        onFinish={handleSubmit(onSubmitForm)}
        className="car-form"
      >
        <Controller
          name="registration"
          control={control}
          render={({ field }) => (
            <Form.Item
              label="Registration Number"
              required
              validateStatus={errors.registration ? "error" : undefined}
              help={errors.registration?.message}
            >
              <Input 
                {...field} 
                placeholder="Enter registration number" 
                className="form-input"
              />
            </Form.Item>
          )}
        />

        <Controller
          name="brand"
          control={control}
          render={({ field }) => (
            <Form.Item
              label="Brand"
              required
              validateStatus={errors.brand ? "error" : undefined}
              help={errors.brand?.message}
            >
              <Input 
                {...field} 
                placeholder="Enter car brand" 
                className="form-input"
              />
            </Form.Item>
          )}
        />

        <Controller
          name="model"
          control={control}
          render={({ field }) => (
            <Form.Item
              label="Model"
              required
              validateStatus={errors.model ? "error" : undefined}
              help={errors.model?.message}
            >
              <Input 
                {...field} 
                placeholder="Enter car model" 
                className="form-input"
              />
            </Form.Item>
          )}
        />

        <Controller
          name="notes"
          control={control}
          render={({ field }) => (
            <Form.Item
              label="Notes"
              validateStatus={errors.notes ? "error" : undefined}
              help={errors.notes?.message}
            >
              <TextArea 
                {...field} 
                rows={4} 
                placeholder="Enter any additional notes" 
                className="form-input"
              />
            </Form.Item>
          )}
        />

        <Form.Item>
          <Button 
            type="primary" 
            htmlType="submit" 
            block
            loading={isSubmitting}
            className="submit-button"
          >
            {initialData ? "แก้ไขรถ" : "เพิ่มรถ"}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default CarForm;