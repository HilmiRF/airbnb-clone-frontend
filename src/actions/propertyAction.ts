"use server";

import { airBnbApi } from "@/lib/axios";
import { GeneralResponseSchema } from "@/zod";
import { PropertyResponseSchema } from "@/zod/response/property/propertyResponseDto";
import { AxiosError } from "axios";
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
