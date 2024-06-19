export type ProductCategory = {
	id: number;
	name: string;
	slug: string;
	description: string | null;
	image: string;
	gallery: GalleryItem[];
};

export type PortfolioCategory = {
	id: number;
	name: string;
	slug: string | null;
	description: string | null;
	gallery: GalleryItem[][] | GalleryItem[] | null;
};

export type GalleryItem = {
	image: string;
	title: string;
};

export type User = {
	id: number;
	name: string;
};
