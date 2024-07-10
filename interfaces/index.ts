export type ProductCategory = {
	id: number;
	name: string;
	slug?: string;
	description?: string;
	image: string;
	gallery?: GallerySection[] | GalleryItem[];
	columnClass?: string;
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
	gallery?: GalleryItem[][] | GalleryItem[] | GallerySection[];
	columnClass?: string;
};

export type GalleryItem = {
	image: string;
	title?: string;
	description?: string;
	width?: number;
	aspect?: string;
};

export type User = {
	id: number;
	name: string;
};
