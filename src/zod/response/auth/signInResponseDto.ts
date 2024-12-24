import { z } from "zod";

const userSchema = z.object({
	id: z.string(),
	email: z.string(),
	username: z.string(),
});

export const SignInResponseSchema = z.object({
	token_type: z.string(),
	expires_in: z.number(),
	access_token: z.string(),
	user: userSchema,
});
