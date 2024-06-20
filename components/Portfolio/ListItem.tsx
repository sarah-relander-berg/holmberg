import React from "react";
import Link from "next/link";

import { PortfolioCategory } from "../../interfaces";
import Gallery from "./Gallery";

type Props = {
	data: PortfolioCategory;
};

const ListItem = ({ data }: Props) => (
	<div>
		<div className="max-w-lg">
			<h2 className="text-2xl font-semibold">{data.name}</h2>
			{data.description ? (
				<div className="mt-2 text-lg text-gray-400 flex flex-col space-y-4 leading-7 group-hover:text-gray-600 transition-colors duration-500">
					<p>{data.description}</p>
				</div>
			) : null}
		</div>
		<div className="space-y-6 mt-6">
			<Gallery data={data.gallery} />
		</div>
	</div>
);

export default ListItem;
