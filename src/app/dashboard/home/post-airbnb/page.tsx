"use client";
import FieldInput from "@/components/organisms/FieldInput";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { usePostProperty } from "@/mutations/usePostProperty";
import { PropertyRequestSchema } from "@/zod/request/property/propertyRequestDto";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface PostAirbnbPageProps {}

const PostAirbnbPage: FC<PostAirbnbPageProps> = ({}) => {
	const router = useRouter();
	const form = useForm<z.infer<typeof PropertyRequestSchema>>({
		resolver: zodResolver(PropertyRequestSchema),
	});
	const [file, setFile] = useState<File | null>(null);
	const [errors, setErrors] = useState<string[]>([]);
	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setFile(e.target.files[0]);
		}
	};
	const postPropertyMutation = usePostProperty();
	const onSubmit = async (val: z.infer<typeof PropertyRequestSchema>) => {
		try {
			if (!file) {
				throw new z.ZodError([
					{
						code: "custom",
						message: "File is required",
						path: ["picture"],
					},
				]);
			}
			const formData = new FormData();
			const jsonBlob = new Blob([JSON.stringify(val)], {
				type: "application/json",
			});
			formData.append("file", file);
			formData.append(
				"propertyRequestDto",
				jsonBlob,
				"propertyRequestDto.json"
			);
			postPropertyMutation.mutate(formData, {
				onSuccess: (data) => {
					console.log("Upload Successful", data);
					router.push("/dashboard/home/property");
				},
				onError: (error) => {
					console.log("Upload Failed", error.message);
				},
			});
		} catch (error) {
			if (error instanceof z.ZodError) {
				setErrors(error.errors.map((err) => err.message));
			} else {
				console.error(error);
			}
		}
	};

	return (
		<div>
			<div className="inline-flex items-center gap-2 cursor-pointer hover:text-primary">
				<ArrowLeftIcon className="w-7 h-7" />
				<span className="text-xl font-semibold">Post Airbnb</span>
			</div>

			<div className="my-5">
				<div className="text-lg font-semibold">Basic Information</div>
				<div className="text-gray-400">
					Fill out form below to post new Airbnb
				</div>
			</div>

			<Separator />

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="mt-5 space-y-6 pt-6"
				>
					<FieldInput
						title="Airbnb Title"
						subtitle="The name of your Airbnb"
					>
						<FormField
							control={form.control}
							name={"title"}
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											className="w-[450px]"
											placeholder="e.g. Vila Mantap"
											{...field}
										/>
									</FormControl>
									<FormDescription>
										At least 3 characters
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</FieldInput>
					<FieldInput
						title="Airbnb Description"
						subtitle="Description must describe the Airbnb"
					>
						<FormField
							control={form.control}
							name="description"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											className="w-[450px]"
											placeholder="e.g. Vila dengan pemandangan indah"
											{...field}
										/>
									</FormControl>
									<FormDescription>
										At least 10 characters
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</FieldInput>
					<FieldInput
						title="Airbnb Price"
						subtitle="The price per night to rent this Airbnb"
					>
						<FormField
							control={form.control}
							name="price_per_night"
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<FormItem>
									<FormControl>
										<Input
											className="w-[450px]"
											placeholder="50000"
											value={value}
											onChange={(e) =>
												onChange(Number(e.target.value))
											}
										/>
									</FormControl>
									<FormDescription>
										Price in USD
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</FieldInput>
					<FieldInput
						title="Airbnb Location"
						subtitle="Location of your Airbnb"
					>
						<FormField
							control={form.control}
							name="location"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											className="w-[450px]"
											placeholder="Jl. Mantap Jiwa No. 5"
											{...field}
										/>
									</FormControl>
									<FormDescription>
										At least 10 characters
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</FieldInput>
					<FieldInput
						title="Airbnb Image"
						subtitle="Image of this Airbnb"
					>
						<FormField
							// control={form.control}
							name={"picture"}
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											type="file"
											id="picture"
											accept="image/*"
											onChangeCapture={handleFileChange}
											{...field}
										/>
									</FormControl>
									<FormDescription>
										The picture of this Airbnb
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</FieldInput>

					<div className="flex justify-end">
						<Button size="lg">Post Airbnb</Button>
					</div>
				</form>
			</Form>
		</div>
	);
};

export default PostAirbnbPage;
