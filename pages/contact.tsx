import Image from "next/image";

import Layout from "../components/Layout";
import { Button } from "../components/Button/Button";

import ImgHero from "../assets/contact.jpg";

const AboutPage = () => (
	<Layout title="Contact | Holmberg Woodworking">
		{/* HERO */}
		<section className=" min-h-96 relative overflow-hidden flex flex-col justify-end items-center">
			<div className="z-10 w-full bg-gradient-to-t from-neutral-950/90 to-neutral-950/0 rounded">
				<div className="container px-6 py-10 mx-auto max-w-5xl z-10">
					<h1 className="block text-3xl font-semibold text-white sm:text-4xl md:text-6xl">Contact</h1>
				</div>
			</div>
			<Image src={ImgHero} alt="about" className="w-full object-cover h-full object-[center_60%] absolute top-0 left-0  md:h-[480px] " />
		</section>

		{/* CONTENT */}
		<section className="relative overflow-hidden">
			<div className="container px-6 py-10 mx-auto max-w-5xl">
				<div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
					<div className="flex-1">
						<h2 className="text-3xl font-semibold mb-4">Let's chat,</h2>
						<div className="mt-6 xl:mt-8 text-lg text-gray-500 flex flex-col space-y-4 leading-7">
							<p>Please fill out the contact form with any questions / comments you have about my services.</p>
							<p>I do create on commission. Tell me about your project and I will make you a free quote on a potential original. </p>
							<p>All works are available for purchase unless otherwise noted. Please contact for pricing. </p>
						</div>
					</div>
					<div className="flex-1">
						<div className="bg-red-50 p-6 text-red-500 rounded-lg mb-8 border-red-500 border font-bold">Contact Form: COMING SOON</div>
						<form
							action=""
							onSubmit={(e) => {
								e.preventDefault();
								alert("COMING SOON");
							}}
						>
							<div className="relative mb-6">
								<label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
									Name{" "}
									<svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
											fill="#EF4444"
										/>
									</svg>
								</label>
								<input
									type="text"
									id="default-search"
									className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none "
									placeholder="Name"
									required={true}
									disabled={true}
								/>
							</div>
							<div className="relative mb-6">
								<label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
									Email{" "}
									<svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
											fill="#EF4444"
										/>
									</svg>
								</label>
								<input
									type="text"
									id="default-search"
									className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none "
									placeholder="name@domain.com"
									required={true}
									disabled={true}
								/>
							</div>
							<div className="relative mb-6">
								<label className="flex  items-center mb-2 text-gray-600 text-sm font-medium">
									Message{" "}
									<svg width="7" height="7" className="ml-1" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
											fill="#EF4444"
										></path>
									</svg>
								</label>
								<div className="flex">
									<div className="relative w-full">
										<textarea
											className="block w-full h-40 px-4 py-2.5 text-base bg-white leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-2xl placeholder-gray-400 focus:outline-none resize-none"
											placeholder="Write a message..."
											required={true}
											disabled={true}
										></textarea>
									</div>
								</div>
							</div>
							<Button>Send Message</Button>
						</form>
					</div>
				</div>
			</div>
		</section>
	</Layout>
);

export default AboutPage;
