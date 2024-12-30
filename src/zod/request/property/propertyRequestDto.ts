import { z } from "zod";

export const PropertyRequestSchema = z.object({
	title: z
		.string({ required_error: "Title is required." })
		.min(3, { message: "Airbnb title must contain atleast 3 characters" }),
	description: z
		.string({ required_error: "Description is required." })
		.min(10, {
			message: "Airbnb description must contain atleast 10 characters",
		}),
	price_per_night: z
		.number({
			required_error: "Price Per Night is required.",
			message: "Price must be a number",
		})
		.int()
		.positive()
		.finite(),
	location: z.string({ required_error: "Location is required." }).min(10, {
		message: "Airbnb location must contain atleast 10 characters",
	}),
	host_id: z
		.string({ required_error: "Host is required." })
		.default("852a5a37-d1fb-4854-9c55-60e83e6f3c84"),
});

// export const FileSchema = z.string({ message: "File is required" });
export const FileSchema = z.instanceof(File, { message: "File is required" });

export const UploadPayloadSchema = z.object({
	propertyRequestDto: PropertyRequestSchema,
	picture: FileSchema,
});

export type PropertyRequestDto = z.infer<typeof PropertyRequestSchema>;
export type UploadPayload = z.infer<typeof UploadPayloadSchema>;
