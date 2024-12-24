"use client";

import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSignIn } from "@/mutations/useSignIn";
import BasicButton from "@/components/commons/BasicButton";
import {
	SignInFormType,
	SignInRequestSchema,
} from "@/zod/request/auth/signInRequestDto";

const SignInForm = () => {
	const [errorMessage, setErrorMessage] = useState<string | undefined>();
	const router = useRouter();
	const { mutateAsync, isError } = useSignIn();
	const form = useForm<SignInFormType>({
		resolver: zodResolver(SignInRequestSchema),
	});

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = form;

	const onSubmit: SubmitHandler<SignInFormType> = async (data) => {
		await mutateAsync(data, {
			onSuccess: (result) => {
				if (result.error) setErrorMessage(result.error);
				else router.push("/dashboard/hello");
			},
			onError: () => setErrorMessage("Internal server error"),
		});
	};

	return (
		<Form {...form}>
			<form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
				<FormItem>
					<FormLabel>Username</FormLabel>
					<FormControl>
						<Input
							placeholder="Username"
							type="text"
							{...register("username")}
						/>
					</FormControl>
					{errors.username && (
						<FormMessage>{errors.username.message}</FormMessage>
					)}
				</FormItem>
				<FormItem>
					<FormLabel>Password</FormLabel>
					<FormControl>
						<Input
							placeholder="Password"
							type="password"
							{...register("password")}
						/>
					</FormControl>
					{errors.password && (
						<FormMessage>{errors.password.message}</FormMessage>
					)}
				</FormItem>
				{(isError || errorMessage) && (
					<FormMessage>{errorMessage}</FormMessage>
				)}
				<BasicButton
					type="submit"
					className="w-full rounded-2xl p-6"
					text="Sign In"
					isLoading={isSubmitting}
					disabled={isSubmitting}
					loadingMessage="Logging in ..."
				/>
			</form>
		</Form>
	);
};

export default SignInForm;
