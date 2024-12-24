import { z } from "zod";

export const GeneralResponseSchema = <T extends z.ZodTypeAny>(schema: T) => {
	return z.object({
		error_schema: z.object({
			error_code: z.string(),
			error_message: z.object({
				english: z.string(),
				indonesian: z.string(),
			}),
		}),
		output_schema: z.object({
			status: z.string(),
			reason: z.string(),
			data: schema,
		}),
	});
};

export const GeneralErrorResponseSchema = z.object({
	error_schema: z.object({
		error_code: z.string(),
		error_message: z.object({
			english: z.string(),
			indonesian: z.string(),
		}),
	}),
});
