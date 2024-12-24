import { ReactNode } from "react";
import { Button } from "../ui/button";
import { LoaderCircle } from "lucide-react";

type BasicButtonProps = {
	variant?:
		| "default"
		| "destructive"
		| "outline"
		| "secondary"
		| "ghost"
		| "link";
	icon?: ReactNode;
	text?: string;
	className?: string;
	handleClick?: () => void;
	isLoading?: boolean;
	loadingMessage?: string;
	disabled?: boolean;
	type?: "submit" | "reset" | "button" | undefined;
};

const BasicButton = ({
	variant,
	icon,
	text,
	className,
	handleClick,
	isLoading = false,
	loadingMessage,
	type = "button",
	disabled = false,
}: BasicButtonProps) => {
	return (
		<Button
			variant={variant}
			className={`${
				icon && "flex gap-3"
			} items-center hover:opacity-75 ${className}`}
			onClick={handleClick}
			type={type}
			disabled={disabled}
		>
			{isLoading ? <LoaderCircle className="animate-spin" /> : icon}
			{text && (
				<h6 className="text-h6">{isLoading ? loadingMessage : text}</h6>
			)}
		</Button>
	);
};

export default BasicButton;
