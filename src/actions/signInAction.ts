"use server";

import { airBnbApi } from "@/lib/axios";
import { GeneralResponseSchema } from "@/zod";
import { SignInResponseSchema } from "@/zod/response/auth/signInResponseDto";
import { AxiosError } from "axios";
import { cookies } from "next/headers";
import { z } from "zod";

type responseType<T> = {
	data?: T;
	error?: string;
};

export const handleSignIn = async (request: {
	username: string;
	password: string;
}): Promise<responseType<z.infer<typeof SignInResponseSchema>>> => {
	const response = await airBnbApi
		.post("/auth/login", request)
		.then((res) => {
			const signInResponse = GeneralResponseSchema(
				SignInResponseSchema
			).parse(res.data);

			cookies().set(
				"accessToken",
				signInResponse.output_schema.data.access_token,
				{
					httpOnly: true,
					maxAge: 9 * 60 * 60,
					sameSite: "strict",
				}
			);

			return { data: signInResponse.output_schema.data };
		})
		.catch((error: AxiosError) => {
			if (error.response?.status === 404)
				return { error: "User not found" };
			else if (error.response?.status === 400)
				return {
					error: "Incorrect username or password. Please try again",
				};
			return { error: "Internal Server Error" };
		});
	return response;
};
