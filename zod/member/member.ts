import {z} from "zod";


export const memberJoinSchema = z.object({
    loginId: z.string(),
    email: z.string().email(),
    password: z.string(),
    passwordCheck: z.string(),
    firstName: z.string(),
    lastName: z.string(),
})