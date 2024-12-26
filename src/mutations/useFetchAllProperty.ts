import { fetchAllProperty } from "@/actions/propertyAction";
import { useMutation } from "@tanstack/react-query";

export const useFetchAllProperty = () => {
	return useMutation({
		mutationFn: () => fetchAllProperty(),
	});
};
