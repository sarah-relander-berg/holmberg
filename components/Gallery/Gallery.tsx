import * as React from "react";

import { GalleryItem, GallerySection, PortfolioCategory } from "../../interfaces";
import Image from "next/image";

import { cn } from "../../utils/utils";
import { Typography } from "../Typography/Typography";

type GalleryProps = {
	data: GallerySection[] | GalleryItem[];
	sectionClass?: string;
	columnClass?: string;
	index?: number
};

const Gallery = ({ data, sectionClass, columnClass, index = 2 }: GalleryProps) => {
	if (data && data[0] && typeof data[0] === "object" && ("name" in data[0] || "gallery" in data[0])) {
		const headingAs = "h" + index as any;
		const headingClass = index == 2 ? "text-2xl" : "text-xl"
		return data.map((section) => <div className={cn(
			sectionClass,
			"space-y-4"
		)} key={section.name}>
			<Typography as={headingAs} className={cn(
				headingClass,
				"font-semibold mb-3"
			)}>{section.name}</Typography>
			<Gallery data={section.gallery} columnClass={section.columnClass ?? 'grid-cols-2 md:grid-cols-3'} index={index + 1} />
			{section.description ? (
				<div className="mt-3 text-lg text-gray-400 flex flex-col space-y-4 leading-7 group-hover:text-gray-600 transition-colors duration-500">
					<p dangerouslySetInnerHTML={{ __html: section.description }}></p>
				</div>
			) : null}
		</div>);
	}
	return (
		<>
			{data &&
				<div className={cn(
					columnClass,
					"grid gap-5"
				)}>
					{data.map((image) => (
						<div key={image.title}>
							<Image height={300} width={image.width ?? 300} className={cn(
								image.aspect ?? "aspect-",
								"object-cover max-w-full rounded-lg"
							)} src={image.image} alt={image.title} />

							{image.description ? (
								<div className="mt-3 text-sm text-gray-400 flex flex-col space-y-4 leading-normal group-hover:text-gray-600 transition-colors duration-500">
									<p dangerouslySetInnerHTML={{ __html: image.description }}></p>
								</div>
							) : null}
						</div>
					))}
				</div>}
		</>
	);
};

export default Gallery;
