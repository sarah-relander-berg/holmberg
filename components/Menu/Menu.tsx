import * as React from "react";
import Link from "next/link";
import { cn } from "../../utils/utils";

type Props = {};

const Menu = ({}: Props) => {
	const [isProductsOpen, setIsProductsOpen] = React.useState(false);
	const toggle = () => {
		setIsProductsOpen(!isProductsOpen);
	};
	return (
		<menu>
			<nav>
				<ul className="font-medium divide-y">
					<li>
						<Link className="flex items-center p-3 text-gray-900 rounded-lg  hover:bg-gray-100  group" href="/">
							Home
						</Link>
					</li>
					<li>
						<div className="flex justify-between items-center w-full p-3 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 ">
							<Link href="/products" className="flex-1 text-left">
								Products
							</Link>
							<button
								type="button"
								className="w-4 px-4 py-2 -m-1 -mr-3 z-10"
								aria-controls="dropdown-example"
								data-collapse-toggle="dropdown-example"
								onClick={() => toggle()}
							>
								<svg
									className={cn(isProductsOpen && "rotate-180", "w-3 h-3 -translate-x-1/2")}
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 10 6"
								>
									<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
								</svg>
							</button>
						</div>
						<ul id="dropdown-example" className={cn(!isProductsOpen && "hidden", "divide-y")}>
							<li className="pl-8">
								<Link className="flex items-center p-3 text-gray-900 rounded-lg  hover:bg-gray-100  group" href="/products/art-frames">
									Art Frames
								</Link>
							</li>
							<li className="pl-8">
								<Link className="flex items-center p-3 text-gray-900 rounded-lg  hover:bg-gray-100  group" href="/products/toddler-frames">
									Toddler Frames
								</Link>
							</li>
							<li className="pl-8">
								<Link className="flex items-center p-3 text-gray-900 rounded-lg  hover:bg-gray-100  group" href="/products/orchid-planters">
									Orchid Planters
								</Link>
							</li>
							<li className="pl-8">
								<Link className="flex items-center p-3 text-gray-900 rounded-lg  hover:bg-gray-100  group" href="/products/cactus-planters">
									Cactus Planters
								</Link>
							</li>
						</ul>
					</li>
					<li>
						<Link className="flex items-center p-3 text-gray-900 rounded-lg  hover:bg-gray-100  group" href="/about">
							About
						</Link>
					</li>
					<li>
						<Link className="flex items-center p-3 text-gray-900 rounded-lg  hover:bg-gray-100  group" href="/contact">
							Contact
						</Link>
					</li>
					<li>
						<Link
							className="flex items-center p-3 text-gray-900 rounded-lg  hover:bg-gray-100  group"
							href="https://www.etsy.com/shop/HolmbergWoodworking"
							target="_blank"
						>
							Shop
						</Link>
					</li>
				</ul>
				<ul className="mt-4 divide-y">
					<li>
						<Link className="flex items-center p-3 text-gray-900 rounded-lg  hover:bg-gray-100  group" href="/portfolio">
							Portfolio
						</Link>
					</li>
				</ul>
			</nav>
		</menu>
	);
};

export default Menu;
