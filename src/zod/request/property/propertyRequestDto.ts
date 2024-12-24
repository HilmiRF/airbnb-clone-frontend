import { z } from "zod";

export const PropertyRequestSchema = z.object({
	title: z.string({ required_error: "Title is required." }),
	description: z.string({ required_error: "Description is required." }),
	price_per_night: z.string({
		required_error: "Price Per Night is required.",
	}),
	location: z.string({ required_error: "Location is required." }),
	host_id: z.string({ required_error: "Host is required." }),
});
