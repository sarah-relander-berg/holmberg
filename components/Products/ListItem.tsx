import React from "react";
import Link from "next/link";
import Image from "next/image";

import { ProductCategory } from "../../interfaces";

type Props = {
	data: ProductCategory;
};

const ListItem = ({ data }: Props) => (
	<Link href="/products/[slug]" as={`/products/${data.slug}`}>
		<div className="group flex flex-row items-center gap-12 cursor-pointer">
			<div className="bg-white rounded-full overflow-hidden aspect-square w-80">
				<Image
					src={data.image}
					alt={data.name}
					width={200}
					height={200}
					className="aspect-square object-cover w-full group-hover:rotate-3 group-hover:scale-110 group-hover:opacity-70 transition-all duration-500"
				/>
			</div>
			<div className=" max-w-lg">
				<h2 className="text-2xl font-semibold">{data.name}</h2>
				{data.description ? (
					<div className="mt-2 text-lg text-gray-400 flex flex-col space-y-4 leading-7 group-hover:text-gray-600 transition-colors duration-500">
						<p>{data.description}</p>
					</div>
				) : null}
			</div>
		</div>
	</Link>
);

export default ListItem;
