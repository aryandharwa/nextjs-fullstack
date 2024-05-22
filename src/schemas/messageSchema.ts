import z from 'zod';

export const MessageSchema = z.object({
    content: z
        .string()
        .min(5, "Message must be at least 5 character long")
        .max(300, "Message must be at most 300 characters long")
})