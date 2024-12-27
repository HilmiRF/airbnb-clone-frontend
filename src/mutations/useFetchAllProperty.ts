import { fetchAllProperty } from "@/actions/propertyAction";
import { useQuery } from "@tanstack/react-query";

export const useFetchAllProperty = () => {
	return useQuery({
		queryKey: ["properties"],
		queryFn: async () => await fetchAllProperty(),
	});
};
