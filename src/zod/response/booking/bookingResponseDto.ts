import { z } from "zod";

export const BookingResponseSchema = z.object({
	id: z.string(),
	property: z.string(),
	user_id: z.string(),
	start_date: z.string(),
	end_date: z.string(),
	total_price: z.string(),
});
