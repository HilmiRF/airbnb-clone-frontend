"use server";

import { airBnbApi } from "@/lib/axios";
import { GeneralResponseSchema } from "@/zod";
import {
	PropertyRequestSchema,
	UploadPayload,
	UploadPayloadSchema,
} from "@/zod/request/property/propertyRequestDto";
import { PropertyResponseSchema } from "@/zod/response/property/propertyResponseDto";
import { cookies } from "next/headers";
import { z } from "zod";

export const fetchAllProperty = async () => {
	const { data } = await airBnbApi.get("/property", {
		headers: {
			Authorization: `Bearer ${cookies().get("accessToken")?.value}`,
		},
	});
	return GeneralResponseSchema(z.array(PropertyResponseSchema)).parse(data);
};

export const postProperty = async (formData: FormData) => {
	const response = await airBnbApi.post("/property", formData, {
		headers: {
			Authorization: `Bearer ${cookies().get("accessToken")?.value}`,
			"Content-Type": "multipart/form-data",
		},
	});
	return GeneralResponseSchema(PropertyResponseSchema).parse(response.data);
};
