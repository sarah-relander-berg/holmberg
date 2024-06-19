import { HeroDefault } from "./HeroDefault";
import React from "react";

export enum HeroVariants {
	HeroSideBySide,
}

export type HeroProps = {
	primaryText?: string;
	bgImage?: string;
	variant?: HeroVariants;
};

export const Hero: React.FC<HeroProps> = ({ variant, ...props }) => {
	if (variant === HeroVariants.HeroSideBySide) {
		return <HeroDefault {...props} />;
	}
	return <HeroDefault {...props} />;
};
