import { ProductCategory } from "../interfaces";

import ImgArt from "../assets/frame.jpg";
import ImgToddler from "../assets/toddler_frame.jpg";
import ImgOrchid from "../assets/orchid_box.jpg";
import ImgCactus from "../assets/cactus-planter.jpg";

export const productCategories: ProductCategory[] = [
	{
		id: 101,
		name: "Art Frames",
		slug: "art-frames",
		description: `I specialize in crafting frames tailored to individual artwork specifications, ensuring precision and
attention to detail in every project. Explore a range of framing options tailored to different styles.
Customizations such as width adjustments are available where needed. The images in this section serve
as examples to showcase the types of frames I create.`,
		image: ImgArt.src,
		gallery: [
			{
				name: "Examples",
				description: ``,
				gallery: [
					{ image: "/images/frames/example01.jpg", title: "", width: 450 },
					{ image: "/images/frames/example02.jpg", title: "", width: 450 },
					{ image: "/images/frames/example03.jpg", title: "", width: 450 },
					{
						image: "/images/frames/example04.jpg", 
						title: "",
						width: 450, 
						description: `Jim Denomie<br/>The Posse, 1995<br/>Courtesy of Jim Denomie Estate and Bockley Gallery`,
					},
					{ 
						image: "/images/frames/example05.jpg", 
						title: "", 
						width: 450,
						description: `Jim Denomie<br/>The Posse, 1995<br/>Courtesy of Jim Denomie Estate and Bockley Gallery`, },
					{
						image: "/images/frames/example06.jpg",
						title: "",
						width: 450,
						description: `Jim Denomie<br/>The National Anthem, 1997-2000<br/>Courtesy of Jim Denomie Estate and Bockley Gallery`,
					},
					{ 
						image: "/images/frames/example07.jpg",
						title: "",
						width: 450,
						description: `Jim Denomie<br/>The National Anthem, 1997-2000<br/>Courtesy of Jim Denomie Estate and Bockley Gallery`,
					},
					{ 
						image: "/images/frames/example08.jpg", 
						title: "", 
						width: 450,
						description: `Jim Denomie<br/>The Posse, 1995<br/>Courtesy of Jim Denomie Estate and Bockley Gallery`,
					 },
				],
				columnClass: "grid-cols-1 md:grid-cols-2",
			},
			{
				name: "Profiles",
				description: ``,
				gallery: [
					{
						name: "Double Cove",
						description: ``,
						gallery: [
							{ image: "/images/frames/profile02a.jpg", title: "", aspect: 'aspect-square', width: 450 },
							{ image: "/images/frames/profile02b.jpg", title: "", aspect: 'aspect-square', width: 450 },
						]
					},
					{
						name: "Inside Cove",
						description: ``,
						gallery: [
							{ image: "/images/frames/profile01a.jpg", title: "", aspect: 'aspect-square', width: 450 },
							{ image: "/images/frames/profile01b.jpg", title: "", aspect: 'aspect-square', width: 450 },
						]
					},
					{
						name: "Outside Cove",
						description: ``,
						gallery: [
							{ image: "/images/frames/profile04a.jpg", title: "", aspect: 'aspect-square', width: 450 },
							{ image: "/images/frames/profile04b.jpg", title: "", aspect: 'aspect-square', width: 450 },
						]
					},
					{
						name: "Home",
						description: ``,
						gallery: [
							{ image: "/images/frames/profile05a.jpg", title: "", aspect: 'aspect-square', width: 450 },
							{ image: "/images/frames/profile05b.jpg", title: "", aspect: 'aspect-square', width: 450 },
						]
					},
					{
						name: "Bead",
						description: ``,
						gallery: [
							{ image: "/images/frames/profile03a.jpg", title: "", aspect: 'aspect-square', width: 450 },
							{ image: "/images/frames/profile03b.jpg", title: "", aspect: 'aspect-square', width: 450 },
						]
					},
				],
				columnClass: "grid-cols-1 md:grid-cols-2",
			},
			{
				name: "Stain Colors",
				description: ``,
				gallery: [
					{ image: "/images/frames/stain01.jpg", title: "", aspect: 'aspect-square', width: 450 },
					{ image: "/images/frames/stain02.jpg", title: "", aspect: 'aspect-square', width: 450 },
					{ image: "/images/frames/stain03.jpg", title: "", aspect: 'aspect-square', width: 450 },
					{ image: "/images/frames/stain04.jpg", title: "", aspect: 'aspect-square', width: 450 },
					{ image: "/images/frames/stain05.jpg", title: "", aspect: 'aspect-square', width: 450 },
					{ image: "/images/frames/stain06.jpg", title: "", aspect: 'aspect-square', width: 450 },
					{ image: "/images/frames/stain07.jpg", title: "", aspect: 'aspect-square', width: 450 },
					{ image: "/images/frames/stain08.jpg", title: "", aspect: 'aspect-square', width: 450 },
					{ image: "/images/frames/stain09.jpg", title: "", aspect: 'aspect-square', width: 450 },
					{ image: "/images/frames/stain10.jpg", title: "", aspect: 'aspect-square', width: 450 }
				],
				columnClass: "grid-cols-2 md:grid-cols-3",
			},
		],
	},
	{
		id: 102,
		name: "Toddler Frames",
		slug: "toddler-frames",
		description:
			`This custom-made solid maple frame is designed specifically to showcase artwork from the included 5.5";
x 8.5" sketchbook. Its magnetic feature enables effortless swapping of drawings, making it easy for kids
to continuously update and display their latest creations. The frame includes hanging hardware on the
back, allowing for both vertical and horizontal orientation. Overall dimensions of the frame are 8" x 11".`,
		image: ImgToddler.src,
		gallery: [
			{ image: "/images/frames/toddler_01.jpg", title: "", aspect: 'aspect-square' },
			{ image: "/images/frames/toddler_02.jpg", title: "", aspect: 'aspect-square' },
			{ image: "/images/frames/toddler_03.jpg", title: "", aspect: 'aspect-square' },
			{ image: "/images/frames/toddler_04.jpg", title: "", aspect: 'aspect-square' },
			{ image: "/images/frames/toddler_05.jpg", title: "", aspect: 'aspect-square' },
			{ image: "/images/frames/toddler_06.jpg", title: "", aspect: 'aspect-square' },
			{ image: "/images/frames/toddler_07.jpg", title: "", aspect: 'aspect-square' },
			{ image: "/images/frames/toddler_08.jpg", title: "", aspect: 'aspect-square' },
			{ image: "/images/frames/toddler_09.jpg", title: "", aspect: 'aspect-square' },
		],
	},
	{
		id: 103,
		name: "The Orchid Box",
		slug: "orchid-planters",
		image: ImgOrchid.src,
		description: `These boxes are crafted from solid oak and feature half-blind dovetail joints at the corners. Each box
contains a fixed insert measuring approximately 6" H x 6" W x 4" D, designed to fit a standard-sized
orchid pot or other pots of similar size. The insert allows ample air circulation around an average-sized
orchid pot placed loosely inside. Made from plastic, the insert includes drain holes that direct excess
water into a secondary container below, which can be easily emptied as needed.`,
		gallery: [],
	},
	{
		id: 104,
		name: "The Cactus Box",
		slug: "cactus-planters",
		image: ImgCactus.src,
		description: `These boxes are crafted from solid oak with half-blind dovetail joints at the corners. Each box includes a fixed insert measuring approximately 6" H x 6" W x 2.5" D, designed to accommodate shallow pots commonly used for cacti and succulents. The insert is made of plastic and features drain holes that direct excess water into a secondary container below, which can be easily emptied.`,
		gallery: [],
	},
];
