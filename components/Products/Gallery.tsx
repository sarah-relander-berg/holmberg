import * as React from "react";

import { ProductCategory } from "../../interfaces";
import Image from "next/image";

type GalleryProps = {
	item: ProductCategory;
};

const Gallery = ({ item: user }: GalleryProps) => (
	<div className="grid grid-cols-2 md:grid-cols-3 gap-5">
		{user.gallery.map((image) => (
			<div key={image.title}>
				<Image height={300} width={300} className=" aspect-square object-cover max-w-full rounded-lg" src={image.image} alt={image.title} />
			</div>
		))}
	</div>
);

export default Gallery;
