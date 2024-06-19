import React from "react";

type Props = {};

const Testimonial = ({}: Props) => (
	<section>
		<div className="container px-6 py-12 mx-auto max-w-5xl">
			<div className="mt-6 md:flex md:items-center md:justify-between">
				<div>
					<h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl ">What people are saying</h1>

					<div className="flex mx-auto mt-6">
						<span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
						<span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
						<span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
					</div>
				</div>

				<div className="flex justify-between mt-8 md:mt-0">
					<button
						title="left arrow"
						className="p-2 mx-3 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-gray-100"
					>
						<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
						</svg>
					</button>

					<button
						title="right arrow"
						className="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-gray-100"
					>
						<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
						</svg>
					</button>
				</div>
			</div>

			<section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
				<div className="p-8 border rounded-lg ">
					<p className="leading-loose text-gray-500 ">“I made this website and all I got was this cool frame”.</p>

					<div className="flex items-center mt-8 -mx-2">
						<img
							className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
							src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
							alt=""
						/>

						<div className="mx-2">
							<h1 className="font-semibold text-gray-800 ">Sarah Berg </h1>
							<span className="text-sm text-gray-500 ">Frame enthusiast</span>
						</div>
					</div>
				</div>

				<div className="p-8 border rounded-lg ">
					<p className="leading-loose text-gray-500 ">“Why is Sarah on her computer every night? That new frame is nice tho.”.</p>

					<div className="flex items-center mt-8 -mx-2">
						<img
							className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
							src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
							alt=""
						/>

						<div className="mx-2">
							<h1 className="font-semibold text-gray-800 ">Sergey Berg</h1>
							<span className="text-sm text-gray-500 ">Developer Husband</span>
						</div>
					</div>
				</div>

				<div className="p-8 border rounded-lg ">
					<p className="leading-loose text-gray-500 ">
						“Meow”.
						<br />
					</p>

					<div className="flex items-center mt-8 -mx-2">
						<img
							className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
							src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
							alt=""
						/>

						<div className="mx-2">
							<h1 className="font-semibold text-gray-800 ">Yoda </h1>
							<span className="text-sm text-gray-500 ">Cat</span>
						</div>
					</div>
				</div>
			</section>
		</div>
	</section>
);

export default Testimonial;
