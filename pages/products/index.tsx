import { GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";

import { ProductCategory } from "../../interfaces";
import { productCategories } from "../../utils/product-data";
import Layout from "../../components/Layout";
import List from "../../components/Products/List";

import ImgHero from "../../assets/products.jpg";

type Props = {
	items: ProductCategory[];
};

const WithStaticProps = ({ items }: Props) => (
	<Layout title="Products | Holmberg Woodworking">
		{/* HERO */}
		<section className="h-96 max-h-[43dvh] relative overflow-hidden flex flex-col justify-end items-center">
			<div className="z-10 w-full bg-gradient-to-t from-neutral-950/90 to-neutral-950/0 rounded">
				<div className="container px-6 sm:px-12 2xl:px-6 pt-12 pb-8 lg:py-10 mx-auto max-w-5xl z-10">
					<h1 className="block text-3xl font-semibold text-white sm:text-5xl 2xl:text-6xl">Products</h1>
				</div>
			</div>
			<Image src={ImgHero} alt="about" className="w-full object-cover h-full  bg-no-repeat bg-center bg-cover absolute top-0 left-0" />
		</section>

		{/* CONTENT */}
		<section className="relative overflow-hidden">
			<div className="container px-6 sm:px-12 2xl:px-6 pt-12 pb-8 lg:py-10 mx-auto max-w-5xl">
				<List items={items} />
			</div>
		</section>
	</Layout>
);

export const getStaticProps: GetStaticProps = async () => {
	// Example for including static props in a Next.js function component page.
	// Don't forget to include the respective types for any props passed into
	// the component.
	const items: ProductCategory[] = productCategories;
	return { props: { items } };
};

export default WithStaticProps;
