import { postProperty } from "@/actions/propertyAction";
import { useMutation } from "@tanstack/react-query";

export const usePostProperty = () => {
	return useMutation({
		mutationFn: async (formData: FormData) => await postProperty(formData),
	});
};
