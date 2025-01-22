import { fetchPropertyById } from "@/actions/propertyAction";
import { useSuspenseQuery } from "@tanstack/react-query";

export const GET_PROPERTY_DETAIL_QUERY_KEY = "fetchPropertyById";

export const useFetchPropertyById = (propertyId: string) => {
	return useSuspenseQuery({
		queryKey: [GET_PROPERTY_DETAIL_QUERY_KEY, propertyId],
		queryFn: async () =>
			(await fetchPropertyById(propertyId)).output_schema.data,
	});
};
