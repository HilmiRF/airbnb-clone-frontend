"use client";
import React, { FC } from "react";
import PropertyList from "./PropertyList";
import { useFetchAllProperty } from "@/mutations/useFetchAllProperty";

interface PropertyContainerProps {}

const PropertyContainer: FC<PropertyContainerProps> = ({}) => {
	const { data, error, isLoading } = useFetchAllProperty();
	console.log(`${data} hehe`);

	return (
		<main className="h-full w-full pb-10">
			{isLoading && <div>Loading...</div>}
			{error && <div>Error: {`${error}`}</div>}
			{data && <PropertyList data={data.output_schema.data} />}
		</main>
	);
};

export default PropertyContainer;
