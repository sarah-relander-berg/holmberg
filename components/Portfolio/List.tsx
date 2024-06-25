import * as React from "react";
import { PortfolioCategory } from "../../interfaces";
import ListItem from "./ListItem";

type Props = {
	items: PortfolioCategory[];
};

const List = ({ items }: Props) => (
	<ul className="grid grid-cols-1 justify-between divide-y">
		{items.map((item) => (
			<li key={item.id} className="py-8">
				<ListItem data={item} />
			</li>
		))}
	</ul>
);

export default List;
