import { z } from 'zod/v4';

export const ProductSchema = z.object({
  id: z.number().int(),
  title: z.string().min(1),
  price: z.number().positive(),
  description: z.string().min(1),
  image: z.url().optional(),
});

export type Product = z.infer<typeof ProductSchema>;
