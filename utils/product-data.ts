import { ProductCategory } from "../interfaces";

import ImgArt from "../assets/frame.jpg";
import ImgToddler from "../assets/toddler_frame.jpg";
import ImgOrchid from "../assets/orchid_box.jpg";
import ImgCactus from "../assets/orchid_box.jpg";

export const productCategories: ProductCategory[] = [
	{
		id: 101,
		name: "Art Frames",
		slug: "art-frames",
		description: "coming soon",
		image: ImgArt.src,
		gallery: [],
	},
	{
		id: 102,
		name: "Toddler Frames",
		slug: "toddler-frames",
		description:
			'This solid maple frame is custom made to display artwork from the included 5.5" x 8.5" sketchbook. The magnetic feature allows you to easily change out drawings so kids can keep updating and showcasing their new favorite creations. Hanging hardware mounted to back allows frame to be hung both vertically and horizontally. The frame measures 8" x 11" overall. ',
		image: ImgToddler.src,
		gallery: [
			{ image: "/images/frames/toddler_01.jpg", title: "" },
			{ image: "/images/frames/toddler_02.jpg", title: "" },
			{ image: "/images/frames/toddler_03.jpg", title: "" },
			{ image: "/images/frames/toddler_04.jpg", title: "" },
			{ image: "/images/frames/toddler_05.jpg", title: "" },
			{ image: "/images/frames/toddler_06.jpg", title: "" },
			{ image: "/images/frames/toddler_07.jpg", title: "" },
			{ image: "/images/frames/toddler_08.jpg", title: "" },
			{ image: "/images/frames/toddler_09.jpg", title: "" },
		],
	},
	{
		id: 103,
		name: "Orchid Planters",
		slug: "orchid-planters",
		image: ImgOrchid.src,
		description: "coming soon",
		gallery: [],
	},
	{
		id: 104,
		name: "Cactus Planters",
		slug: "cactus-planters",
		image: ImgCactus.src,
		description: "coming soon",
		gallery: [],
	},
];
