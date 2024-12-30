import { z } from "zod";

export const PropertyResponseSchema = z.object({
	id: z.string(),
	title: z.string(),
	description: z.string(),
	pricePerNight: z.number(),
	location: z.string(),
	hostId: z.string(),
	imageUrl: z.string(),
});
