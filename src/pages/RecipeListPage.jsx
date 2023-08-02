import { Box, Center } from "@chakra-ui/react";
import { Header } from "../components/ui/Header";
import { SearchRecipe } from "../components/RecipeSearch";

export const RecipeListPage = ({ clickFn }) => {

	return (
		<>
			<Box minH="100vh" minW="100vw" bg="gray.50">
				<Center flexDir="column" >
					<Header />
					<SearchRecipe clickFn={clickFn} />
				</Center>
			</Box>
		</>
	);
};
