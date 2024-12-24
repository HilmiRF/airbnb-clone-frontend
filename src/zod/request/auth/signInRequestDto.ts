import { z } from "zod";

export const SignInRequestSchema = z.object({
	username: z.string({ required_error: "Username is required." }),
	password: z.string({ required_error: "Password is required." }),
});

export type SignInFormType = z.infer<typeof SignInRequestSchema>;
