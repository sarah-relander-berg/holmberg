import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";

import ImgAbout from "../assets/about.jpg";

const AboutPage = () => (
	<Layout title="About | Holmberg Woodworking">
		{/* HERO */}
		<section className="h-96 max-h-[42dvh] relative overflow-hidden flex flex-col justify-end items-center">
			<div className="z-10 w-full bg-gradient-to-t from-neutral-950/90 to-neutral-950/0 rounded">
				<div className="container px-6 py-10 mx-auto max-w-5xl z-10">
					<h1 className="block text-4xl font-semibold text-white sm:text-5xl xl:text-6xl">About</h1>
				</div>
			</div>
			<Image src={ImgAbout} alt="about" className="w-full object-cover h-full bg-no-repeat bg-center bg-cover absolute top-0 left-0" />
		</section>

		{/* Content */}
		<section>
			<div className="container px-6 py-12 lg:py-20 mx-auto max-w-5xl prose">
				<blockquote className="max-w-2xl mx-auto text-lg md:text-xl lg:text-2xl italic text-gray-400 leading-normal">
					"I feel most drawn to frames that have relatively straightforward profiles and that are made from wood with interesting grain patterns-
					especially the figured grain of quarter sawn white oak. I feel this combination allows for a unique and significant visual presence that
					communicates quality, while keeping the primary focus on the artwork."
					<cite className="block mt-4 text-lg not-italic text-gray-700">- Todd Holmberg</cite>
				</blockquote>
			</div>
		</section>

		{/* CV */}
		<section className="bg-gray-100 text-center">
			<div className="container px-6 py-10 mx-auto max-w-5xl">CV: Coming Soon</div>
		</section>
	</Layout>
);

export default AboutPage;
