import React from "react";

type Props = {};

const Collections = ({}: Props) => (
	<section className="bg-gray-100">
		<div className="container px-6 sm:px-12 2xl:px-6 py-12 mx-auto max-w-5xl">
			<div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
				<h2 className="text-2xl font-semibold text-gray-900">Collections</h2>

				<div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
					<div className="group relative">
						<div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
							<img
								src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
								alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
								className="h-full w-full object-cover object-center"
							/>
						</div>
						<h3 className="mt-6 text-sm text-gray-500">
							<a href="#">
								<span className="absolute inset-0"></span>
								Desk and Office
							</a>
						</h3>
						<p className="text-base font-semibold text-gray-900">Work from home accessories</p>
					</div>
					<div className="group relative">
						<div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
							<img
								src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg"
								alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
								className="h-full w-full object-cover object-center"
							/>
						</div>
						<h3 className="mt-6 text-sm text-gray-500">
							<a href="#">
								<span className="absolute inset-0"></span>
								Self-Improvement
							</a>
						</h3>
						<p className="text-base font-semibold text-gray-900">Journals and note-taking</p>
					</div>
					<div className="group relative">
						<div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
							<img
								src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg"
								alt="Collection of four insulated travel bottles on wooden shelf."
								className="h-full w-full object-cover object-center"
							/>
						</div>
						<h3 className="mt-6 text-sm text-gray-500">
							<a href="#">
								<span className="absolute inset-0"></span>
								Travel
							</a>
						</h3>
						<p className="text-base font-semibold text-gray-900">Daily commute essentials</p>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Collections;
