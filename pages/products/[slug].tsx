import { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";

import { ProductCategory } from "../../interfaces";
import { productCategories } from "../../utils/product-data";

import Layout from "../../components/Layout";
import Gallery from "../../components/Products/Gallery";
import ListDetail from "../../components/Products/ListDetail";

type Props = {
	item?: ProductCategory;
	errors?: string;
};

const StaticPropsDetail = ({ item, errors }: Props) => {
	if (errors) {
		return (
			<Layout title="Error | Holmberg Woodworking">
				<p>
					<span style={{ color: "red" }}>Error:</span> {errors}
				</p>
			</Layout>
		);
	}

	return (
		<Layout title={`${item ? item.name : "User Detail"} | Holmberg Woodworking`}>
			{/* HERO */}
			<section className=" min-h-96 relative overflow-hidden flex flex-col justify-end items-center">
				<div className="z-10 w-full bg-gradient-to-t from-neutral-950/90 to-neutral-950/0 rounded">
					<div className="container px-6 sm:px-12 2xl:px-6 pt-12 pb-8 lg:py-10 mx-auto max-w-5xl z-10">
						<h1 className="block text-3xl font-semibold text-white sm:text-5xl 2xl:text-6xl">{item.name}</h1>
					</div>
				</div>
				<Image
					src={item.image}
					alt="about"
					width={1200}
					height={400}
					className="w-full object-cover h-full sm:h-[480px]  bg-no-repeat bg-center bg-cover absolute top-0 left-0"
				/>
			</section>
			<section>
				<div className="container px-6 sm:px-12 2xl:px-6 py-12 mx-auto max-w-5xl">
					{item && <ListDetail item={item} />}
					<Gallery item={item} />
				</div>
			</section>
		</Layout>
	);
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
	// Get the paths we want to pre-render based on users
	const paths = productCategories.map((category) => ({
		params: { slug: category.slug },
	}));

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const slug = params?.slug;
		const item = productCategories.find((data) => data.slug === slug);
		// By returning { props: item }, the StaticPropsDetail component
		// will receive `item` as a prop at build time
		return { props: { item } };
	} catch (err: any) {
		return { props: { errors: err.message } };
	}
};
