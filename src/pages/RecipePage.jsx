import {
	Container,
	Grid,
	Box,
	Flex,
	Button,
	Image,
	Card,
	CardBody,
	Stack,
	Heading,
	Text,
	Tag,
	Badge,
	Spacer,
	HStack,
} from "@chakra-ui/react";
import { RecipeDrawer } from "../components/ui/InfoDrawer";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Header } from "../components/ui/Header";

export const RecipePage = ({ recipe, clickFn }) => {
	return (
		<>
			<Header />
			<Box bg="gray.50">
				<Container
					maxW={{ base: "20em", md: "35em", xl: "50em" }}
					centerContent
				>
					<Flex py="2rem" justifyContent={"center"}>
						<Card
							variant="outline"
							bg="white"
							cursor="pointer"
							overflow="hidden"
							alt="recipe.recipe.label"
						>
							<CardBody>
								<Image
									w={"100%"}
									maxH={{ base: "20em", md: "35em", xl: "50em" }}
									src={recipe.recipe.image}
									alt=""
									borderRadius="lg"
								/>
								<Stack mt="6" spacing="3">
									<Text textTransform={"uppercase"}>
										<Tag>{recipe.recipe.mealType}</Tag>
									</Text>
									<Heading size="md">{recipe.recipe.label}</Heading>
								</Stack>
								<Stack>
									<Text my={3}>
										Total cooking time: {recipe.recipe.totalTime} min.
										<br />
										Servings: {recipe.recipe.yield}
									</Text>
									<Grid templateColumns="repeat(2, 1fr)" gap={8}>
										<Box>
											<strong>Ingredients: </strong>
											{recipe.recipe.ingredientLines.map((ingredient) => (
												<li key={ingredient}>{ingredient}</li>
											))}
										</Box>
										<Box direction={["column", "row"]} maxW="90%">
											<strong>Health labels: </strong>
											{recipe.recipe.healthLabels.map(
												(healthLabel) =>
													healthLabel && (
														<Badge
															key={healthLabel}
															mr={1}
															colorScheme="purple"
														>
															{healthLabel}
														</Badge>
													)
											)}
											<Spacer my={3} />
											<strong>Diet: </strong>
											{recipe.recipe.dietLabels.map(
												(dietLabel) =>
													dietLabel && (
														<Badge key={dietLabel} colorScheme="green" mr={2}>
															{dietLabel}
														</Badge>
													)
											)}
											<Spacer my={3} />
											<strong>Cautions: </strong>
											{recipe.recipe.cautions.map(
												(cautionLabel) =>
													cautionLabel && (
														<Badge key={cautionLabel} colorScheme="red" mr={2}>
															{cautionLabel}
														</Badge>
													)
											)}
										</Box>
										<Spacer />
									</Grid>
								</Stack>
								<Flex>
									<RecipeDrawer recipe={recipe} />
								</Flex>
							</CardBody>
						</Card>
					</Flex>
				</Container>

				<HStack
					justify={"right"}
					pr={{ base: "1rem" }}
					pb={{ base: "1rem" }}
					position={"sticky"}
					bottom={0}
				>
					<Button
						w="fit-content"
						variant="outline"
						colorScheme="teal"
						onClick={() => clickFn()}
						leftIcon={<ArrowLeftIcon />}
					></Button>
				</HStack>
			</Box>
		</>
	);
};
