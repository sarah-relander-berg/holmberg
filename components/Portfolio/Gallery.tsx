import * as React from "react";

import { GalleryItem, PortfolioCategory } from "../../interfaces";
import Image from "next/image";

type GalleryProps = {
	data: GalleryItem[][] | GalleryItem[];
};

const Gallery = ({ data }: GalleryProps) => {
	const isArrayOfArrays = Array.isArray(data[0]);
	if (isArrayOfArrays) {
		return data.map((gallery) => <Gallery data={gallery} />);
	}
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 gap-5">
			{data.map((image) => (
				<div key={image.title}>
					<Image height={300} width={300} className=" aspect-square object-cover max-w-full rounded-lg" src={image.image} alt={image.title} />
				</div>
			))}
		</div>
	);
};

export default Gallery;
