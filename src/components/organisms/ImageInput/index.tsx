import { Separator } from "@/components/ui/separator";
import React, { ChangeEvent, FC, ReactNode } from "react";

interface ImageInputProps {
	children: ReactNode;
	title: string;
	subtitle: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	value: File | null;
}

const ImageInput: FC<ImageInputProps> = ({
	children,
	title,
	subtitle,
	onChange,
	value,
}) => {
	return (
		<>
			<div className="flex flex-row items-start">
				<div className="w-[35%]">
					<div className="font-semibold">{title}</div>
					<div className="text-gray-400 w-80">{subtitle}</div>
				</div>
				{children}
			</div>
			<Separator />
		</>
	);
};

export default ImageInput;
