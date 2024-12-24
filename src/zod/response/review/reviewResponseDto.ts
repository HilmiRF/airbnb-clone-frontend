import { z } from "zod";

export const ReviewResponseSchema = z.object({
	id: z.string(),
	property_id: z.string(),
	user_id: z.string(),
	rating: z.number(),
	comment: z.string(),
});
