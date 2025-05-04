"use client";
import React from "react";
import {useFormStatus} from "react-dom";
import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";

interface LoadingButtonProps {
	title: string;
	loadingTitle?: string;
	width?: string;
	position?: string;
}
const LoadingButton = ({title, loadingTitle, width, position}:LoadingButtonProps) => {
	const {pending} = useFormStatus();

	return (
		<div className={`flex mt-5 ${position ? position : "justify-end"}`}>
			<Button
				type="submit"
				className={`${
					width && width
				}`}
				disabled={pending}
			>
				{pending ? (
					<span className="flex items-center">
						<Loader2 className="w-2 h-2 mr-2 animate-spin"/>
						{loadingTitle}
          </span>
				) : (
					`${title}`
				)}
			</Button>
		</div>
	);
};

export default LoadingButton;