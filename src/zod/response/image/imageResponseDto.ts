import { z } from "zod";

export const ImageResponseSchema = z.object({
	id: z.string(),
	url: z.string(),
	file_name: z.string(),
	uploaded_at: z.string(),
	user_id: z.string(),
	property_id: z.string(),
});
