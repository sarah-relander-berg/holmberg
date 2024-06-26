import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../components/Button/Button";
import Img404 from "../assets/th.jpg";

const SandBoxPage = () => {
	return (
		<Layout title="Sandbox | Holmberg Woodworking">
			<div className="grid-cols-1 md:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 lg:grid-cols-3 grid gap-5">
				<div className="aspect-[4/3] aspect-[4/5] aspect-square"></div>
				<div className="hidden md:block opacity-0 visible-none"></div>
			</div>
		</Layout>
	);
};

export default SandBoxPage;
