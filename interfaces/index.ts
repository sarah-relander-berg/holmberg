export type ProductCategory = {
	id: number;
	name: string;
	slug: string;
	image: string;
	gallery: {
		image: string;
		title: string;
	}[];
};

export type User = {
	id: number;
	name: string;
};
