import { z } from "zod";

export const SignUpRequestSchema = z.object({
	email: z.string({ required_error: "Email is required." }),
	username: z.string({ required_error: "Username is required." }),
	password: z.string({ required_error: "Password is required." }),
});
