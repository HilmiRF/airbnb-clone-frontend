import { z } from "zod";

export const PropertyResponseSchema = z.object({
	id: z.string(),
	title: z.string(),
	description: z.string(),
	price_per_night: z.string(),
	location: z.string(),
	host_id: z.string(),
});
