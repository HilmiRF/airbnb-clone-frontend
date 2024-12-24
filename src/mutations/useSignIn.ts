import { handleSignIn } from "@/actions/signInAction";
import { useMutation } from "@tanstack/react-query";

export const useSignIn = () => {
	return useMutation({
		mutationFn: (request: { username: string; password: string }) =>
			handleSignIn(request),
	});
};
