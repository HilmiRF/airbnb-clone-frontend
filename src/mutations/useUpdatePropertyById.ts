import { updatePropertyById } from "@/actions/propertyAction";
import { PropertyRequestDto } from "@/zod/request/property/propertyRequestDto";
import { useMutation } from "@tanstack/react-query";

export const useUpdatePropertyById = () => {
	return useMutation({
		mutationFn: async (request: {
			propertyId: string;
			property: PropertyRequestDto;
		}) => await updatePropertyById(request),
	});
};
