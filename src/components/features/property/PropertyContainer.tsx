import React, { FC } from "react";
import Image from "next/image";

interface PropertyContainerProps {}

const PropertyContainer: FC<PropertyContainerProps> = ({}) => {
	return (
		<div className="flex flex-col lg:col-span-2 w-[25%] max-w-[25%]">
			<Image
				className="rounded-xl w-full"
				src={
					"https://ftwncsityajgsgljlhko.supabase.co/storage/v1/object/public/images/3ebbc96f-c00f-4030-8c97-f51e71f75587-airbnb-property-1.jpg"
				}
				alt={""}
				width={302}
				height={286}
			/>
			<div className="flex flex-row justify-between mt-3 w-full">
				<div className="font-semibold text-[#222222]">
					Groveland, California
				</div>
				<div className="text-[#222222]">4.91</div>
			</div>
			<div className="text-[#5E5E5E]">Yosemite National Park</div>
			<div className="text-[#5E5E5E]">Oct 23-28</div>
			<div className="font-semibold text-[#222222]">$289 night</div>
		</div>
	);
};

export default PropertyContainer;
