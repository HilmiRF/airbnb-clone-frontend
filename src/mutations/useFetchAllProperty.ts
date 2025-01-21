import { fetchAllProperty } from "@/actions/propertyAction";
import { useQuery } from "@tanstack/react-query";

export const GET_PROPERTIES_QUERY_KEY = "fetchAllProperty";

export const useFetchAllProperty = () => {
	return useQuery({
		queryKey: [GET_PROPERTIES_QUERY_KEY],
		queryFn: async () => await fetchAllProperty(),
		gcTime: 0,
	});
};
