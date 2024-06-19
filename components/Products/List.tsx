import * as React from "react";
import { ProductCategory } from "../../interfaces";
import ListItem from "./ListItem";

type Props = {
	items: ProductCategory[];
};

const List = ({ items }: Props) => (
	<ul className="grid grid-cols-1 justify-between gap-16 gap-y-12">
		{items.map((item) => (
			<li key={item.id}>
				<ListItem data={item} />
			</li>
		))}
	</ul>
);

export default List;
