import { postProperty } from "@/actions/propertyAction";
import { UploadPayload } from "@/zod/request/property/propertyRequestDto";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { z } from "zod";

export const usePostProperty = () => {
	const queryClient = useQueryClient();
	const router = useRouter();
	return useMutation({
		mutationFn: async (formData: FormData) => await postProperty(formData),
	});
};
