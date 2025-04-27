import { z } from 'zod';

export const CarSchema = z.object({
    registration: z.string().min(1, "Registration is required"),
    brand: z.string().min(1, "Brand is required"),
    model: z.string().min(1, "Model is required"),
    notes: z.string().optional(),
});

export type CarInput = z.infer<typeof CarSchema>;
