import PropertyDetailContainer from "@/components/features/property/PropertyDetailContainer";
import React from "react";

const PropertyDetailPage = async ({
	params,
}: {
	params: Promise<{ propertyId: string }>;
}) => {
	const propertyId = (await params).propertyId;
	return (
		<div>
			<PropertyDetailContainer propertyId={propertyId} />
		</div>
	);
};

export default PropertyDetailPage;
