import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../components/Button/Button";
import Img404 from "../assets/th.jpg";

const NotFoundPage = () => {
	return (
		<Layout title="404 | Holmberg Woodworking">
			<section>
				<div className="container px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12 max-w-5xl">
					<div className="wf-ull lg:w-1/2">
						<p className="text-sm font-medium text-green-500 mb-3">404 error</p>
						<h1 className="text-2xl font-semibold text-gray-800 md:text-3xl">Page not found</h1>
						<div className="mt-4 flex flex-col gap-4 text-gray-500">
							<p>Sorry, the page you are looking for doesn't exist.</p>
							<p>Don't let that be the case for your next woodworking project - let's figure that one out together!</p>
						</div>
						<div className="flex items-center mt-6 gap-x-3">
							<Button variant="secondary" onClick={() => window.history.back()}>
								<div className="flex items-center gap-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										className="w-5 h-5 rtl:rotate-180"
									>
										<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
									</svg>

									<span>Go back</span>
								</div>
							</Button>
							<Button asChild>
								<Link href="/contact">Contact Todd</Link>
							</Button>
						</div>
					</div>

					<div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
						<Image src={Img404} alt="about" className="w-full object-cover h-80 md:h-96 lg:h-[32rem] bg-no-repeat bg-center bg-cover" />
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default NotFoundPage;
