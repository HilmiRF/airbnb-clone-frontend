import { z } from "zod";

export const SingUpResponseSchema = z.object({
	user_id: z.string(),
	email: z.string(),
	username: z.string(),
	created_by: z.string(),
	created_at: z.string(),
	updated_by: z.string(),
	updated_at: z.string(),
});
