import React, { PropsWithChildren } from "react";

import { StaticImageData } from "next/image";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const sectionOuter = cva(["leading-relaxed"], {
	variants: {
		background: {
			default: [],
			blue: ["text-matisse-50", "bg-matisse-500"],
			yellow: ["text-alabaster-990", "bg-kournikova-500"],
			white: ["text-gray-500", "bg-alabaster-50"],
			lightBlue: ["text-alabaster-500", "bg-aquamarine-200"],
			green: ["text-alabaster-50", "bg-seaGreen-700"],
		},
		backgroundImage: {
			none: [],
			cover: ["bg-cover", "bg-[image:var(--image-url)]"],
		},
	},
	defaultVariants: {
		background: "default",
		backgroundImage: "none",
	},
});

const sectionInner = cva(["py-20 container"], {
	variants: {
		align: {
			center: ["text-center", "items-center"],
			right: ["text-right", "items-end"],
			left: ["text-left", "items-start"],
		},
		background: {
			default: [],
			blue: ["text-matisse-50", "bg-matisse-500"],
			yellow: ["text-alabaster-990", "bg-kournikova-500"],
			white: ["text-gray-500", "bg-alabaster-50"],
			lightBlue: ["text-alabaster-500", "bg-aquamarine-200"],
			green: ["text-alabaster-50", "bg-seaGreen-700"],
		},
	},
	defaultVariants: {
		align: "left",
		background: "default",
	},
});

export interface PageSectionProps {
	className?: string;
	backgroundColor?: "default" | "blue" | "yellow" | "white" | "lightBlue";
	backgroundImage?: StaticImageData | string;
	textAlign?: "left" | "center" | "right";
	as?: "header" | "footer" | "section" | "div";
}

export const PageSection: React.FC<PropsWithChildren<PageSectionProps>> = ({ className, backgroundColor, backgroundImage, textAlign, as, children }) => {
	const bgImageUrl = typeof backgroundImage === "string" ? backgroundImage : backgroundImage?.src;
	const bgImageVar = {
		"--image-url": `url(${bgImageUrl})`,
	} as React.CSSProperties;
	const Comp = as ?? "section";
	return (
		<Comp
			className={twMerge(
				sectionOuter({
					background: backgroundColor,
					backgroundImage: bgImageUrl ? "cover" : "none",
					className,
				})
			)}
			style={bgImageVar}
		>
			<div
				className={sectionInner({
					align: textAlign,
				})}
			>
				{children}
			</div>
		</Comp>
	);
};
