import { RecipeCard } from "./RecipeCard";
import { Grid } from "@chakra-ui/react";

export const SearchList = ({ matchingResults, labels, clickFn }) => {
	return (
		<>
			<Grid
				templateColumns={{
					base: "repeat(1, 1fr)",
					md: "repeat(2, 1fr)",
					lg: "repeat(3, 1fr)",
					xl: "repeat(4, 1fr)",
					"2xl": "repeat(4, 1fr)",
				}}
				gap={8}
				marginY={20}
                marginX={{base:"1rem",}}
			>
				{matchingResults.map((recipe) => (
					<RecipeCard
						clickFn={clickFn}
						recipe={recipe}
						key={recipe.recipe.label}
					/>
				))}

				{labels.map((recipe) => (
					<RecipeCard
						clickFn={clickFn}
						recipe={recipe}
						key={recipe.recipe.healthLabels}
					/>
				))}
			</Grid>
		</>
	);
};
