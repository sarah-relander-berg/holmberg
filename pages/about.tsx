import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";

import ImgAbout from "../assets/about.jpg";

const AboutPage = () => (
	<Layout title="About | Holmberg Woodworking">
		{/* HERO */}
		<section className=" min-h-96 relative overflow-hidden flex flex-col justify-end items-center">
			<div className="z-10 w-full bg-gradient-to-t from-neutral-950/90 to-neutral-950/0 rounded">
				<div className="container px-6 py-10 mx-auto max-w-5xl z-10">
					<h1 className="block text-4xl font-semibold text-white sm:text-5xl xl:text-6xl">About</h1>
				</div>
			</div>
			<Image src={ImgAbout} alt="about" className="w-full object-cover h-full sm:h-[480px]  bg-no-repeat bg-center bg-cover absolute top-0 left-0" />
		</section>

		{/* Content */}
		<section>
			<div className="container px-6 py-10 mx-auto max-w-5xl prose">
				<h2 className="text-3xl font-semibold mb-4">hello,</h2>
				<p>I make things!</p>
			</div>
		</section>

		{/* CV */}
		<section className="bg-gray-100">
			<div className="container px-6 py-10 mx-auto max-w-5xl">CV</div>
		</section>
	</Layout>
);

export default AboutPage;
