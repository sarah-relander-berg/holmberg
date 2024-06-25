import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";

import { Button } from "../components/Button/Button";
import Img404 from "../assets/th.jpg";

const SandBoxPage = () => {
	return (
		<Layout title="Sandbox | Holmberg Woodworking">
			<div className="grid-cols-1 md:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 lg:grid-cols-3 grid gap-5"></div>
		</Layout>
	);
};

export default SandBoxPage;
