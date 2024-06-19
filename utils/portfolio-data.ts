import { PortfolioCategory } from "../interfaces";

export const portfolio: PortfolioCategory[] = [
	{
		id: 101,
		name: "Kitchen Before/After",
		slug: null,
		description: null,
		gallery: [
			[
				{ image: "/images/portfolio/kitchen-before1.png", title: "Before" },
				{ image: "/images/portfolio/kitchen-after1.png", title: "After" },
			],
			[
				{ image: "/images/portfolio/kitchen-before2.png", title: "Before" },
				{ image: "/images/portfolio/kitchen-after2.png", title: "After" },
			],
		],
	},
	// {
	// 	id: 102,
	// 	name: "Upstairs Before/After",
	// 	slug: null,
	// 	description: null,
	// 	gallery: [
	// 		{ image: "/images/portfolio/kitchen-before1.png", title: "Before" },
	// 		{ image: "/images/portfolio/kitchen-after1.png", title: "After" },
	// 	],
	// },
	// {
	// 	id: 103,
	// 	name: "Side Door Before/After",
	// 	slug: null,
	// 	description: null,
	// 	gallery: [
	// 		{ image: "/images/portfolio/kitchen-before1.png", title: "Before" },
	// 		{ image: "/images/portfolio/kitchen-after1.png", title: "After" },
	// 	],
	// },
];
