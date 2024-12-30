"use server";

import { airBnbApi } from "@/lib/axios";
import { GeneralResponseSchema } from "@/zod";
import { ImageRequestSchema } from "@/zod/request/image/imageRequestDto";
import { ImageResponseSchema } from "@/zod/response/image/imageResponseDto";
import { cookies } from "next/headers";
import { z } from "zod";

export const uploadImageProperty = async (
	request: z.infer<typeof ImageRequestSchema>
) => {
	const { file, property_id } = ImageRequestSchema.parse(request);
	if (!file || !property_id) {
		alert("Please select a file and provide a property ID.");
		return;
	}
	const formData = new FormData();
	formData.append("image", file);
	const { data } = await airBnbApi.post(
		`/image?property_id=${property_id}`,
		formData,
		{
			headers: {
				Authorization: `Bearer ${cookies().get("accessToken")?.value}`,
				"Content-Type": "multipart/form-data",
			},
		}
	);
	return GeneralResponseSchema(ImageResponseSchema).parse(data);
};
