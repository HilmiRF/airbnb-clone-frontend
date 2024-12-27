"use client";
import React, { FC } from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { z } from "zod";
import { PropertyResponseSchema } from "@/zod/response/property/propertyResponseDto";
import PropertyItem from "./PropertyItem";

const PropertyList = ({
	data,
}: {
	data: z.infer<typeof PropertyResponseSchema>[];
}) => {
	console.log(data.length);

	{
		if (data.length === 0) {
			return <div>No Property found</div>;
		}
		return (
			<div className="flex flex-row gap-9 py-3">
				{data.map((property, index) => (
					<PropertyItem
						title={property.title}
						pricePerNight={property.pricePerNight}
						description={property.description}
						key={`property-${index}`}
					/>
				))}
			</div>
		);
	}
};

export default PropertyList;
