import * as React from "react";

import { ProductCategory } from "../../interfaces";

type ListDetailProps = {
	item: ProductCategory;
};

const ListDetail = ({ item }: ListDetailProps) => <div className="mb-12">{item.description}</div>;

export default ListDetail;
