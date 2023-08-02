import { HStack, Heading } from "@chakra-ui/react";

export const Header = () => {
	return (
		<>
			<HStack
				p={5}
				shadow="md"
				w="100%"
				borderWidth="1px"
				position={"sticky"}
				top={0}
				zIndex="1"
				bg="white"
			>
				<Heading
					fontSize={{ base: "22px", md: "30px", xl: "52px" }}
					color="teal"
					ml={{ base: "0", md: "1rem", xl: "2rem" }}
				>
					Lekker, Yummy, Rico
				</Heading>
			</HStack>
		</>
	);
};
