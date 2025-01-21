"use server";

import { airBnbApi } from "@/lib/axios";
import { GeneralResponseSchema } from "@/zod";
import {
	PropertyRequestDto,
	PropertyRequestSchema,
	UploadPayload,
	UploadPayloadSchema,
} from "@/zod/request/property/propertyRequestDto";
import { PropertyResponseSchema } from "@/zod/response/property/propertyResponseDto";
import { cookies, headers } from "next/headers";
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

export const fetchPropertyById = async (propertyId: string) => {
	const { data } = await airBnbApi.get(`/property/${propertyId}`, {
		headers: {
			Authorization: `Bearer ${cookies().get("accessToken")?.value}`,
		},
	});
	return GeneralResponseSchema(PropertyResponseSchema).parse(data);
};

export const updatePropertyById = async (request: {
	propertyId: string;
	property: PropertyRequestDto;
}) => {
	const response = await airBnbApi.put(
		`/property/${request.propertyId}`,
		request.property,
		{
			headers: {
				Authorization: `Bearer ${cookies().get("accessToken")?.value}`,
				"Content-Type": "application/json",
			},
		}
	);

	return GeneralResponseSchema(PropertyResponseSchema).parse(response.data);
};
