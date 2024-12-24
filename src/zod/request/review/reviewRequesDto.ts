import { z } from "zod";

export const ReviewRequestSchema = z.object({
	property_id: z.string({ required_error: "Property is required." }),
	rating: z.number({ required_error: "Rating is required." }),
	comment: z.string({
		required_error: "Comment is required.",
	}),
});
