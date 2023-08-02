import {
	Flex,
	Input,
	InputLeftElement,
	Stack,
	InputGroup,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export const SearchInput = ({ changeFn }) => {

	return (
		<>
			<Flex>
				<Stack mr={{md:"2rem", xl:""}} width={{base:"12em", md:"20em", xl:"20em"}} mt={{base:"1rem", md:"2rem", xl:"4rem"}}>
					<InputGroup>
						<InputLeftElement pointerEvents="none" zIndex="0">
							<SearchIcon color="teal.500" />
						</InputLeftElement>
						<Input
							width="100%"
							alignItems="center"
							variant="flushed"
							fontSize={{ base: "18px", lg: "24px", xl: "24px" }}
							placeholder="Find your recipe"
							_placeholder={{
								opacity: 1,
								color: "teal.500",
								textAlign: "center",
							}}
							textColor="gray.700"
							textAlign="center"
							onChange={changeFn}
						/>
					</InputGroup>
				</Stack>
			</Flex>
		</>
	);
};
