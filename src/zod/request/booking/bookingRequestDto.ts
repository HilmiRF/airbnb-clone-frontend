import { z } from "zod";

export const BookingRequestSchema = z.object({
	property: z.string({ required_error: "Property is required." }),
	start_date: z.string({ required_error: "Start Date is required." }),
	end_date: z.string({ required_error: "End Date is required." }),
	total_price: z.string({ required_error: "Total Price is required." }),
});
