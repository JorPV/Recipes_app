import {
	Card,
	Heading,
	CardBody,
	Image,
	Stack,
	Divider,
	Text,
	Tag,
	Badge,
	Box,
} from "@chakra-ui/react";

export const RecipeCard = ({ recipe, clickFn }) => {
	return (
		<Card
			maxW="sm"
			variant="outline"
			boxShadow="dark-lg"
			bg="white"
			onClick={() => clickFn(recipe)}
			cursor="pointer"
			_hover={{ transform: "scale(1.05)" }}
		>
			<CardBody>
				<Image
					h={"300px"}
					w={"100%"}
					src={recipe.recipe.image}
					alt="Green double couch with wooden legs"
					borderRadius="lg"
				/>
				<Stack mt="6" spacing="3">
					<Text textTransform={"uppercase"}>
						<Tag>{recipe.recipe.mealType}</Tag>
					</Text>
					<Heading size="md">{recipe.recipe.label}</Heading>
				</Stack>
				<Divider mt={6} />
				<Box direction={["column", "row"]} mt={3} maxW="90%">
					{recipe.recipe.dietLabels.map(
						(dietLabel) =>
							dietLabel && (
								<Badge key={dietLabel} colorScheme="green" mr={2}>
									{dietLabel}
								</Badge>
							)
					)}
					{recipe.recipe.cautions.map(
						(cautionLabel) =>
							cautionLabel && (
								<Badge key={cautionLabel} colorScheme="red" mr={2}>
									{cautionLabel}
								</Badge>
							)
					)}
					<Badge colorScheme="purple">{recipe.recipe.dishType}</Badge>
				</Box>
			</CardBody>
		</Card>
	);
};
