import { z } from 'zod';

export const CarSchema = z.object({
    registration: z.string().min(1, "โปรดระบุทะเบียนรถ"),
    brand: z.string().min(1, "โปรดระบุยี่ห้อรถ"),
    model: z.string().min(1, "โปรดระบุรุ่นรถ"),
    notes: z.string().optional(),
});

export type CarInput = z.infer<typeof CarSchema>;
