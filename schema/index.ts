import { z } from "zod";

export const LoginSchema = z.object({
   email: z.string().email("Please enter a valid email address"),
   password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const SignupSchema = z.object({
   username: z.string().min(3, "Username must be at least 3 characters long"),
   email: z.string().email(),
   password: z.string().min(6, "Password must be at least 6 characters long"),
});
