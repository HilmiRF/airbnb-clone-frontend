import React, { FC } from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";

type PropertyItemProps = {
	propertyId: string;
	title: string;
	pricePerNight: Number;
	description: string;
	image: string;
};

const PropertyItem: FC<PropertyItemProps> = ({
	propertyId,
	title,
	pricePerNight,
	description,
	image,
}) => {
	const pathname = usePathname();
	return (
		<Link
			href={
				pathname === "/dashboard/home/property"
					? `/dashboard/home/property/${propertyId}`
					: `/${propertyId}`
			}
		>
			<div className="w-full">
				<Image
					className="rounded-xl w-full h-60 object-cover"
					src={image}
					alt={""}
					width={302}
					height={286}
				/>
				<div className="flex flex-row justify-between mt-3 w-full">
					<div className="font-semibold text-[#222222]">{title}</div>
					<div className="text-[#222222] flex flex-row gap-1">
						<div className="mt-1">
							<AiFillStar />
						</div>
						4.91
					</div>
				</div>
				<div className="text-[#5E5E5E]">{description}</div>
				<div className="font-semibold text-[#222222]">
					{pricePerNight.toString()}$ night
				</div>
			</div>
		</Link>
	);
};

export default PropertyItem;
