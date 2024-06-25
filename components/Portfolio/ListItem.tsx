import React from "react";
import Link from "next/link";

import { PortfolioCategory } from "../../interfaces";
import Gallery from "./Gallery";

type Props = {
	data: PortfolioCategory;
};

const ListItem = ({ data }: Props) => (
	<div>
		<h2 className="text-2xl font-semibold">{data.name}</h2>
		<div className="space-y-6 mt-3">
			<Gallery data={data.gallery} />
		</div>
		{data.description ? (
			<div className="mt-3 max-w-3xl text-lg text-gray-400 flex flex-col space-y-4 leading-7 group-hover:text-gray-600 transition-colors duration-500">
				<p dangerouslySetInnerHTML={{ __html: data.description }}></p>
			</div>
		) : null}
	</div>
);

export default ListItem;
