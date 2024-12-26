import SignInForm from "./SignInForm";

const SignInContainer = () => {
	return (
		<main className="flex h-screen w-full items-center justify-center">
			<div className="flex flex-col items-center">
				<div className="dark:bg-custom-dark-card flex w-[473px] flex-col items-center gap-4 rounded-2xl p-10 shadow-sm">
					<h2 className="text-h2 font-bold">Sign In</h2>
					<div className="w-full">
						<SignInForm />
					</div>
				</div>
			</div>
		</main>
	);
};

export default SignInContainer;
