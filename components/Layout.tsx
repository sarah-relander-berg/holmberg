import React, { ReactNode } from "react";
import { cn } from "../utils/utils";

import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Logo from "../assets/logo.png";
import Menu from "./Menu/Menu";

type Props = {
	children?: ReactNode;
	title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>

			<div className="relative h-20 md:hidden z-50 bg-white">
				<div className="fixed flex justify-between pt-2 px-4 pb-4 h-20 bg-white w-full">
					<div className="flex gap-3">
						<Image src={Logo} alt="Holmberg Woodworking Logo" width={40} className="-mb-1 mt-1" />
						<div className="text-xl xs:text-2xl mt-4 font-semibold">Holmberg Woodworking</div>
					</div>

					<button
						onClick={() => toggle()}
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
			</div>

			<header
				id="sidebar-multi-level-sidebar"
				className={cn(
					!isOpen && "translate-x-full",
					"fixed bg-white z-50 top-30 shadow-sm right-0 z-40 w-72 h-screen transition-transform md:translate-x-0 md:left-0 md:top-0 md:transition-none xl:w-96"
				)}
				aria-label="Sidebar"
			>
				<div className="h-full pb-4 px-4 md:pt-12 lg:px-6 overflow-y-auto ">
					<div className="hidden md:block text-center mb-8">
						<Image src={Logo} alt="Holmberg Woodworking Logo" className="mx-auto w-16 xl:w-20" />
						<div className="text-xl sm:text-3xl xl:text-4xl mt-4 font-semibold">Holmberg Woodworking</div>
					</div>

					<Menu />
				</div>
			</header>

			<div className=" bg-gray-50 min-h-screen md:ml-72 xl:ml-96">
				{children}
				<footer className="container px-6 py-12 mx-auto max-w-5xl">© 2024 Holmberg Woodworking</footer>{" "}
			</div>
		</div>
	);
};

export default Layout;
