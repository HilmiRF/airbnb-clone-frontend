import { fetchPropertyById } from "@/actions/propertyAction";
import { useQuery } from "@tanstack/react-query";

export const GET_PROPERTY_DETAIL_QUERY_KEY = "fetchPropertyById";

export const useFetchPropertyById = (propertyId: string) => {
	return useQuery({
		queryKey: [GET_PROPERTY_DETAIL_QUERY_KEY, propertyId],
		queryFn: async () =>
			(await fetchPropertyById(propertyId)).output_schema.data,
	});
};
