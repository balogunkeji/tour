import React from "react";
import Tour from "./tour";
import { Text,Box, Center } from "@chakra-ui/react";

function Tours({ removeTour, tours }) {
	return (
		<Box>
			<Center><Text as="h1" fontWeight="bold" fontSize="2rem" marginTop="4rem">Our Tours</Text></Center>
			<Box>
				{tours.map((tour) => {
					return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
				})}
			</Box>
		</Box>
	);
}

export default Tours;
