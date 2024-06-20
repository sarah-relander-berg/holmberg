import Layout from "../components/Layout";
import Image from "next/image";
import Testimonial from "../components/PageSectionStatic/Testimonial";
import Collections from "../components/PageSectionStatic/Collections";

import ImgHome from "../assets/home2.jpg";

const IndexPage = () => (
	<Layout title="Home | Holmberg Woodworking">
		<Image
			src={ImgHome}
			alt="home"
			className="w-full bg-gray-50 object-cover 2xl:object-contain h-dvh max-h-[calc(100dvh-5rem)] md:max-h-dvh bg-no-repeat bg-center bg-contain"
		/>
	</Layout>
);

export default IndexPage;
