import { z } from 'zod'

export const ProductBodySchema = z.object({
  body: z.object({
    id: z.string(),
    value: z.number(),
    company: z.string(),
    created_at: z.instanceof(Date),
    link: z.string().optional(),
    due_date: z.instanceof(Date),
    emission_date: z.instanceof(Date),
    updated_at: z.instanceof(Date),
    billing_id: z.string().uuid().optional(),
  }),
})

export const ProductParamsSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
})
