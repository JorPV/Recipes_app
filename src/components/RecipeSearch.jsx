import { useState } from "react";
import { data } from "../utils/data";
import { SearchInput } from "./ui/SearchInput";
import { SearchList } from "./SearchList";

export const SearchRecipe = ({ clickFn }) => {
	const [searchField, setSearchField] = useState("");

	// object to hold matchingResults on recipa name (label)
	const matchingResults = data.hits.filter((element) => {
		return element.recipe.label
			.toLowerCase()
			.includes(searchField.toLowerCase());
	});

	// object to hold health labels results
	const labels = data.hits.filter((element) => {
		return element.recipe.healthLabels.some((label) => {
			return label.toLowerCase().includes(searchField.toLowerCase());
		});
	});

	const handleChange = (event) => {
		setSearchField(event.target.value);
	};

	return (
		<>
			<SearchInput changeFn={handleChange} />
			{/* Pass both matchingResults and labels as separate props */}
			<SearchList
				clickFn={clickFn}
				matchingResults={matchingResults}
				labels={labels}
			/>
		</>
	);
};
