import {z} from 'zod';

export const acceptMessageSchema = z.object({
    message: z.string().min(1, 'Message must not be empty')
})