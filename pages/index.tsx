import Layout from "../components/Layout";
import Image from "next/image";
import Testimonial from "../components/PageSectionStatic/Testimonial";
import Collections from "../components/PageSectionStatic/Collections";

import ImgHome from "../assets/frame.jpg";

const IndexPage = () => (
	<Layout title="Home | Holmberg Woodworking">
		<Image src={ImgHome} alt="home" className="w-full object-cover h-dvh bg-no-repeat bg-center bg-contain" />
	</Layout>
);

export default IndexPage;