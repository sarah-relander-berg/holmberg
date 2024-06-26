import { GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";

import { PortfolioCategory } from "../../interfaces";
import { portfolio } from "../../utils/portfolio-data";
import Layout from "../../components/Layout";

import ImgHero from "../../assets/products.jpg";
import { useContext } from "react";
import { ctx } from "../../utils/context";
import { Button } from "../../components/Button/Button";
import List from "../../components/Portfolio/List";

type Props = {
	items: PortfolioCategory[];
};

const WithStaticProps = ({ items }: Props) => {
	const context = useContext(ctx);

	const validate = (e) => {
		e.preventDefault();
		const passwordInput = document.getElementById("password") as HTMLInputElement;
		if (passwordInput.value === "Carpentry") {
			context.setAuthenticated(true);
		}
	};

	return (
		<Layout title="Portfolio | Holmberg Woodworking">
			{/* HERO */}
			<section className="h-96 max-h-[43dvh] relative overflow-hidden flex flex-col justify-end items-center">
				<div className="z-10 w-full bg-gradient-to-t from-neutral-950/90 to-neutral-950/0 rounded">
					<div className="container px-6 sm:px-12 2xl:px-6 pt-12 pb-8 lg:py-10 mx-auto max-w-5xl z-10">
						<h1 className="block text-3xl font-semibold text-white sm:text-5xl 2xl:text-6xl">Portfolio</h1>
					</div>
				</div>
				<Image src={ImgHero} alt="about" className="w-full object-cover h-full bg-no-repeat bg-center bg-cover absolute top-0 left-0" />
			</section>

			{/* CONTENT */}
			<section className="relative overflow-hidden">
				<div className="container px-6 sm:px-12 2xl:px-6 pt-12 pb-8 lg:py-10 mx-auto max-w-5xl">
					{context.authenticated ? (
						<List items={items} />
					) : (
						<div className="max-w-md bg-white rounded-lg border border-gray-200 shadow-sm p-8 mx-auto">
							<form onSubmit={validate}>
								<div className="relative mb-6">
									<label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">This section is password protected</label>
									<input
										type="text"
										id="password"
										className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none "
										placeholder="Enter Password"
										required={true}
									/>
								</div>
								<Button type="submit">Submit</Button>
							</form>
						</div>
					)}
				</div>
			</section>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	// Example for including static props in a Next.js function component page.
	// Don't forget to include the respective types for any props passed into
	// the component.
	const items: PortfolioCategory[] = portfolio;
	return { props: { items } };
};

export default WithStaticProps;
