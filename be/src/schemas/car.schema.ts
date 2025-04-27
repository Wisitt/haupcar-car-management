import z from 'zod';
export const CarSchema = z.object({
    registration: z
    .string({ required_error: "โปรดระบุทะเบียนรถ" })
    .min(1, { message: "ทะเบียนรถต้องไม่ว่าง" }),
    brand: z.
    string({ required_error: "โปรดระบุยี่ห้อรถ" })
    .min(1, { message: "ยี่ห้อรถต้องไม่ว่าง" }),
    model: z.
    string({ required_error: "โปรดระบุรุ่นรถ" })
    .min(1, { message: "รุ่นรถต้องไม่ว่าง" }),
    notes: z
    .string()
    .optional(),
});