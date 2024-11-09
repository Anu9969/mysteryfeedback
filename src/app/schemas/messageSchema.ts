import {z} from 'zod';

export const messageSchema = z.object({
    message: z.string().min(1, 'Message must not be empty')
})