"use client";
import React, { FC, useState } from "react";
import PropertyList from "./PropertyList";
import { useFetchPropertyById } from "@/mutations/useFetchPropertyById";
import { ArrowLeftIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import FieldInput from "@/components/organisms/FieldInput";
import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	PropertyRequestDto,
	PropertyRequestSchema,
} from "@/zod/request/property/propertyRequestDto";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useUpdatePropertyById } from "@/mutations/useUpdatePropertyById";
import { useRouter } from "next/navigation";

const PropertyDetailContainer = ({ propertyId }: { propertyId: string }) => {
	const { isLoading, data, error } = useFetchPropertyById(propertyId);
	const updatePropertyMutation = useUpdatePropertyById();
	const [errors, setErrors] = useState<string[]>([]);
	const router = useRouter();
	const form = useForm<z.infer<typeof PropertyRequestSchema>>({
		resolver: zodResolver(PropertyRequestSchema),
		defaultValues: {
			title: data?.title,
			description: data?.description,
			host_id: data?.hostId,
			location: data?.location,
			price_per_night: data?.pricePerNight,
		},
	});

	const onSubmit = async (
		property: z.infer<typeof PropertyRequestSchema>
	) => {
		try {
			updatePropertyMutation.mutate(
				{ propertyId, property },
				{
					onSuccess: (result) => {
						router.push("/dashboard/home/property");
					},
					onError: (error) => {
						console.log("Error: ", error.message);
					},
				}
			);
		} catch (error) {
			if (error instanceof z.ZodError) {
				setErrors(error.errors.map((err) => err.message));
			} else {
				console.error(error);
			}
		}
		router.push("/dashboard/home/property");
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {`${error}`}</div>;
	}

	return (
		data && (
			<div>
				<Link href={"/dashboard/home/property"}>
					<div className="inline-flex items-center gap-2 cursor-pointer hover:text-primary">
						<ArrowLeftIcon className="w-7 h-7" />
						<div className="text-xl font-semibold">List Airbnb</div>
					</div>
				</Link>

				<div className="my-5">
					<div className="text-lg font-semibold">
						Basic Information
					</div>
					<div className="text-gray-400">
						Fill out form below to update an existing Airbnb
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
												value={value}
												onChange={(e) =>
													onChange(
														Number(e.target.value)
													)
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

						<div className="flex justify-end">
							<Button size="lg">Update Property</Button>
						</div>
					</form>
				</Form>
			</div>
		)
	);
};

export default PropertyDetailContainer;
