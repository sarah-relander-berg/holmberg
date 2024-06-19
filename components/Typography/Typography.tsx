import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../utils/utils";

// Some nice typography inspiration here: https://ui.shadcn.com/docs/components/typography
export const variantTextSize = {
	default: [],
	xs: ["text-xs"],
	sm: ["text-sm"],
	md: ["text-md"],
	lg: ["text-lg"],
	xl: ["text-xl"],
	"2xl": ["text-2xl"],
	"3xl": ["text-3xl"],
	"4xl": ["text-4xl"],
	"5xl": ["text-5xl"],
};

const typographyVariants = cva("my-4", {
	variants: {
		variant: {
			default: [],
			highlight: ["inline bg-matisse-500 text-alabaster-50 box-decoration-clone px-2 font-semibold leading-normal"],
			highlightYellow: ["inline bg-kournikova-500 text-alabaster-50 box-decoration-clone px-2 font-semibold leading-normal"],
			highlightWhite: ["inline bg-alabaster-50 text-alabaster-990 box-decoration-clone px-2 font-semibold leading-normal"],
			highlightPurple: ["inline bg-portGore-950 text-alabaster-50 box-decoration-clone px-2 font-semibold leading-normal"],
			underline: ["after:block after:mt-4 after:w-28 after:h-1.5"],
			label: ["text-sm uppercase"],
			caption: ["font-semibold uppercase text-md"],
			quote: ["font-light"],
		},
		align: {
			default: [],
			left: ["text-left"],
			center: ["text-center"],
			right: ["text-right"],
		},
		color: {
			default: ["after:bg-black"],
			neutral: ["text-alabaster-990 after:bg-alabaster-990"],
			blue: ["text-matisse-500 after:bg-matisse-500"],
			lightBlue: ["text-aquamarine-300 after:bg-aquamarine-300"],
			yellow: ["text-kournikova-500 after:bg-kournikova-500"],
			white: ["text-alabaster-50 after:bg-alabaster-50"],
		},
	},
	defaultVariants: {
		align: "default",
		color: "default",
		variant: "default",
	},
});

export interface TypographyProps extends React.BaseHTMLAttributes<HTMLParagraphElement>, VariantProps<typeof typographyVariants> {
	color?: "default" | "neutral" | "blue" | "yellow" | "white";
	size?: string;
	as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
	asChild?: boolean;
}

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(({ className, variant, align, color, size, as, asChild, ...props }, ref) => {
	const Comp = asChild ? Slot : as ?? "p";
	return (
		<Comp
			className={cn(
				`text-${size}`,
				variant === "underline" && align === "center" && "after:mx-auto",
				typographyVariants({ variant, align, color, className })
			)}
			ref={ref}
			{...props}
		/>
	);
});
Typography.displayName = "Typography";

export { Typography, typographyVariants };
