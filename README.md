# Car Management System 
ระบบจัดการข้อมูลรถยนต์สร้างขึ้นด้วย React, Node.js, Express, และ Prisma

## ภาพรวมระบบ 

มีฟีเจอร์:
- เพิ่มข้อมูลรถใหม่
- แก้ไขข้อมูลรถที่มีอยู่
- ดูข้อมูลรถทั้งหมด
- ลบข้อมูลรถ

## เทคโนโลยีที่ใช้ 

# Frontend
- React.js
- Ant Design (UI Framework)
- Axios (HTTP Client)
- React Hook Form + Zod (Form Validation)

# Backend
- Node.js
- Express.js
- Prisma (ORM)
- TypeScript

## การติดตั้งและรัน 

1. Clone โปรเจค:
```bash
git clone https://github.com/Wisitt/haupcar-car-management
cd haupcar-car-management
```

2. ติดตั้ง Dependencies:
```bash
#Backend
cd backend
npm install

#Frontend
cd ../frontend
npm install
```

3. ตั้งค่าฐานข้อมูล:
```bash
# backend
# .env เพิ่ม DATABASE_URL
echo "DATABASE_URL=\"your-database-url\"" > .env

# รัน Prisma
npx prisma migrate dev
```

4. รันโปรเจค:
```bash
# รัน Backend
cd backend
npm run dev

# รัน Frontend
cd frontend
npm run dev
```

## โครงสร้างโปรเจค 

### Backend
- จัดการ API และฐานข้อมูล (`controllers`, `routes`)
- กำหนดรูปแบบข้อมูล (`schemas`, `prisma`)

### Frontend
- แสดงผลและรับข้อมูล (`components`)
- ตรวจสอบและเชื่อมต่อ API (`schemas`, `services`)

## API Endpoints 
# Cars API
- `GET /api/cars` - ดึงข้อมูลรถทั้งหมด
- `GET /api/cars/:id` - ดึงข้อมูลรถตาม ID
- `POST /api/cars` - เพิ่มข้อมูลรถใหม่
- `PUT /api/cars/:id` - อัพเดทข้อมูลรถ
- `DELETE /api/cars/:id` - ลบข้อมูลรถ

## ฟีเจอร์เพิ่มเติม
1. **การตรวจสอบข้อมูล (Validation)**
   - ใช้ Zod ในการตรวจสอบความถูกต้องของข้อมูล
   - แสดงข้อความแจ้งเตือนเมื่อข้อมูลไม่ถูกต้อง

2. **UI/UX ที่ใช้งานง่าย**
   - Responsive design รองรับทุกขนาดหน้าจอ
   - Modal สำหรับแก้ไขข้อมูล
   - การแจ้งเตือนผลการทำงาน

3. **ความปลอดภัย**
   - Validation Middleware
   - Error Handling ที่ครอบคลุม

## การใช้งาน 
1. **หน้าหลัก**
   - ด้านซ้าย: ฟอร์มเพิ่มข้อมูลรถ
   - ด้านขวา: ตารางแสดงข้อมูลรถทั้งหมด

2. **การเพิ่มข้อมูลรถ**
   - กรอกข้อมูลในฟอร์มด้านซ้าย
   - กดปุ่ม "เพิ่มรถ"

3. **การแก้ไขข้อมูล**
   - กดปุ่ม "แก้ไข" ที่รายการที่ต้องการ
   - แก้ไขข้อมูลใน Modal
   - กดบันทึก

4. **การลบข้อมูล**
   - กดปุ่ม "ลบ" ที่รายการที่ต้องการ
   - ยืนยันการลบในกล่องยืนยัน


# Car Management System
A vehicle management system built with React, Node.js, Express, and Prisma

## System Overview

Features:
- Add new car
- Edit existing car
- View all cars
- Delete car

## Technology Stack

# Frontend
- React.js
- Ant Design (UI Framework)
- Axios (HTTP Client)
- React Hook Form + Zod (Form Validation)

# Backend
- Node.js
- Express.js
- Prisma (ORM)
- TypeScript

## Installation and Setup

1. Clone project:
```bash
git clone https://github.com/Wisitt/haupcar-car-management
cd haupcar-car-management
```

2. Install Dependencies:
```bash
#Backend
cd backend
npm install

#Frontend
cd ../frontend
npm install
```

3. Database setup:
```bash
# backend
# Add DATABASE_URL to .env
echo "DATABASE_URL=\"your-database-url\"" > .env

# Run Prisma
npx prisma migrate dev
```

4. Run project:
```bash
# Run Backend
cd backend
npm run dev

# Run Frontend
cd frontend
npm run dev
```

## Project Structure

### Backend
- API and database management (`controllers`, `routes`)
- Data schema definition (`schemas`, `prisma`)

### Frontend
- UI rendering and data input (`components`)
- API integration and validation (`schemas`, `services`)

## API Endpoints
# Cars API
- `GET /api/cars` - Retrieve all cars
- `GET /api/cars/:id` - Get car by ID
- `POST /api/cars` - Create new car
- `PUT /api/cars/:id` - Update car
- `DELETE /api/cars/:id` - Delete car

## Additional Features
1. **Data Validation**
   - Zod validation implementation
   - Error message display

2. **User-Friendly UI/UX**
   - Responsive design
   - Edit modal
   - Operation notifications

3. **Security**
   - Validation Middleware
   - Comprehensive Error Handling

## Usage Guide
1. **Main Page**
   - Left: Car entry form
   - Right: Cars data table

2. **Adding Car**
   - Fill form on left
   - Click "Add Car"

3. **Editing**
   - Click "Edit" on desired record
   - Modify in Modal
   - Save changes

4. **Deleting**
   - Click "Delete" on record
   - Confirm deletion