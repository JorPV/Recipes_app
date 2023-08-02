import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Button,
	Divider,
	useDisclosure,
} from "@chakra-ui/react";
import React from "react";

export const RecipeDrawer = ({ recipe }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();

	return (
		<>
			<Button
				ref={btnRef}
				size={"md"}
				colorScheme="teal"
				onClick={onOpen}
			>
				Nutrients
			</Button>
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}
				size={"md"}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader bg="purple.50">List of nutrients</DrawerHeader>
					<Divider />
					<DrawerBody>
						{/* {recipe.recipe.healthLabels.map((nutrient)=> nutrient && (<p key={nutrient}>{nutrient}</p>))} */}
						{Object.keys(recipe.recipe.totalNutrients).map((key) => {
							const nutrient = recipe.recipe.totalNutrients[key];
							const label = nutrient.label;
							const quantity = Math.round(nutrient.quantity);
							const unit = nutrient.unit;

							return (
								<div key={key}>
									<p>
										<strong>
											<i>{label}</i>
										</strong>
									</p>
									<p>Quantity: {quantity} {unit}</p>
								</div>
							);
						})}
					</DrawerBody>
					<DrawerFooter bg="purple.50" />
				</DrawerContent>
			</Drawer>
		</>
	);
};
