import React from "react";
import { useState, useEffect } from "react";
import {
	Flex,
	Badge,
	Box,
	Text,
	Image,
	Spacer,
	Button,
	Collapse,
	Center,
} from "@chakra-ui/react";

function Tour({ id, name, image, info, price, removeTour }) {
const [showMore, setShowMore] = useState(false)
	const handleToggle = () => setShowMore(!showMore);


	return (
		<Flex justify="center" align="center" m="1rem 0 5rem 0">
				
					<Box
						maxW="xl"
						borderWidth="1px"
						borderRadius="lg"
						bg="white">
						<Image src={image} alt="hello" maxW="100%" h="25rem" w="40rem" />
						<Box p="30px 25px">
							<Box paddingBottom="15px" d="flex">
								<Text as="h4" fontWeight="bold" fontSize="1.2rem">
									{name}
								</Text>
								<Spacer />
								<Badge
									as="h4"
									ml="1"
									variant="subtle"
									fontSize="1.2rem"
									bg="#ddeffa"
									color="#49a6e9"
									fontWeight="bold"
									p="2px 10px">
									${price}
								</Badge>
							</Box>
							<Box>
								<Collapse startingHeight={20} in={showMore}>
									{info}
								</Collapse>
								<Button
									size="sm"
									onClick={handleToggle}
									mt="1rem"
									variant="ghost"
									color="blue"
									marginTop="0"
									d="block">
									Show {showMore ? "Less" : "More"}
								</Button>
							</Box>
							<Center>
								<Button
									textAlign="center"
									fontSize="1.1rem"
									w="200px"
									m="0 auto"
									onClick={() => removeTour(id)}
									variant="outline"
									color="red"
									colorScheme="red">
									Not interested
								</Button>
							</Center>
						</Box>
					</Box>
		</Flex>
	);
}

export default Tour;
