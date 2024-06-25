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
	slug?: string;
	description?: string;
	gallery?: GallerySection[] | GalleryItem[];
	columnClass?: string;
};

export type GallerySection = {
	name?: string;
	description?: string;
	gallery?: GalleryItem[][] | GalleryItem[];
	columnClass?: string;
};

export type GalleryItem = {
	image: string;
	title?: string;
	width?: number;
	aspect?: string;
};

export type User = {
	id: number;
	name: string;
};
