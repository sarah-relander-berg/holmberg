import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Logo from "../assets/logo.png";

type Props = {
	children?: ReactNode;
	title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
	<div>
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>

		<div className="sm:hidden flex justify-between pt-2 px-4 pb-4 h-20">
			<div className="flex gap-3">
				<Image src={Logo} alt="Holmberg Woodworking Logo" width={40} className="-mb-1 mt-1" />
				<div className="text-xl xs:text-2xl mt-4 font-semibold">Holmberg Woodworking</div>
			</div>

			<button
				data-drawer-target="sidebar-multi-level-sidebar"
				data-drawer-toggle="sidebar-multi-level-sidebar"
				aria-controls="sidebar-multi-level-sidebar"
				type="button"
				className="inline-flex items-center p-3 mt-2 ms-3 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
			>
				<span className="sr-only">Open sidebar</span>
				<svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path
						clip-rule="evenodd"
						fill-rule="evenodd"
						d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
					></path>
				</svg>
			</button>
		</div>

		<header
			id="sidebar-multi-level-sidebar"
			className="fixed bg-white z-50 top-30 shadow-sm right-0 z-40 w-72 h-screen transition-transform translate-x-full sm:translate-x-0 sm:left-0 sm:top-0 sm:transition-none xl:w-96"
			aria-label="Sidebar"
		>
			<div className="h-full pb-4 px-4 sm:pt-12 lg:px-6 overflow-y-auto ">
				<div className="hidden sm:block text-center mb-8">
					<Image src={Logo} alt="Holmberg Woodworking Logo" className="mx-auto w-16 xl:w-24" />
					<div className="text-xl sm:text-3xl xl:text-4xl mt-4 font-semibold">Holmberg Woodworking</div>
				</div>

				<menu>
					<nav c>
						<ul className="font-medium divide-y">
							<li>
								<Link className="flex items-center p-3 text-gray-900 rounded-lg  hover:bg-gray-100  group" href="/">
									Home
								</Link>
							</li>
							<li>
								<button
									type="button"
									className="flex justify-between items-center w-full p-3 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 "
									aria-controls="dropdown-example"
									data-collapse-toggle="dropdown-example"
								>
									<Link href="/products" className="flex-1 text-left">
										Products
									</Link>
									<svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
										<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
									</svg>
								</button>
								<ul id="dropdown-example" className="hidden py-2 space-y-2">
									<li>
										<Link className="flex items-center p-3 text-gray-900 rounded-lg  hover:bg-gray-100  group" href="/products">
											Products
										</Link>
									</li>
									<li>
										<Link className="flex items-center p-3 text-gray-900 rounded-lg  hover:bg-gray-100  group" href="/products">
											Products
										</Link>
									</li>
									<li>
										<Link className="flex items-center p-3 text-gray-900 rounded-lg  hover:bg-gray-100  group" href="/products">
											Products
										</Link>
									</li>
									<li>
										<Link className="flex items-center p-3 text-gray-900 rounded-lg  hover:bg-gray-100  group" href="/products">
											Products
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
			</div>
		</header>

		<div className="sm:ml-72 xl:ml-96 bg-gray-50 min-h-screen">
			{children}
			<footer className="container px-6 py-12 mx-auto max-w-5xl">© 2024 Holmberg Woodworking</footer>{" "}
		</div>
	</div>
);

export default Layout;
