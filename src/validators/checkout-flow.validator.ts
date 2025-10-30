import { z } from 'zod'
export const stepImageSchema = z.object({
  fileUrl: z.string().url('Please upload a valid file'),
})

export const stepContactSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  firstName: z.string().min(3, 'First name must be at least 3 characters'),
  lastName: z.string().min(3, 'Last name must be at least 3 characters'),
})

export const stepAddressSchema = z.object({
  country: z
    .string()
    .min(2, 'Country must be at least 2 characters')
    .max(100, 'Country must be less than 100 characters'),
  city: z
    .string()
    .min(2, 'City must be at least 2 characters')
    .max(100, 'City must be less than 100 characters'),
  shippingAddress: z
    .string()
    .min(5, 'Address must be at least 5 characters')
    .max(100, 'Address must be less than 100 characters'),
})

export const stepPaymentSchema = z.object({
  cardNumber: z
    .string()
    .regex(/^[0-9]{16}$/, 'Please enter a valid 16-digit card number'),
  cardholderName: z
    .string()
    .min(2, 'Cardholder name must be at least 2 characters')
    .max(100, 'Cardholder name must be less than 100 characters'),
  cvv: z.string().regex(/^[0-9]{3,4}$/, 'Please enter a valid CVV'),
})

export const CombinedCheckoutSchema = stepContactSchema
  .merge(stepAddressSchema)
  .merge(stepPaymentSchema)
  .merge(stepImageSchema)

export type CombinedCheckoutType = z.infer<typeof CombinedCheckoutSchema>
