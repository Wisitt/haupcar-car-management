import { z } from 'zod';

export const CarSchema = z.object({
    registration: z.string().nonempty("โปรดระบุทะเบียนรถ"),
    brand: z.string().nonempty("โปรดระบุยี่ห้อรถ"),
    model: z.string().nonempty("โปรดระบุรุ่นรถ"),
    notes: z.string().max(500).optional(),
});

export type CarInput = z.infer<typeof CarSchema>;
