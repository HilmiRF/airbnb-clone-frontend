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
	{
		if (data.length === 0) {
			return <div>No Property found</div>;
		}
		return (
			<div className="grid grid-cols-4 gap-9 py-3">
				{data.map((property, index) => (
					<PropertyItem
						title={property.title}
						pricePerNight={property.pricePerNight}
						description={property.description}
						image={property.imageUrl}
						propertyId={property.id}
						key={`property-${index}`}
						// add onClick feature to detail property
					/>
				))}
			</div>
		);
	}
};

export default PropertyList;
