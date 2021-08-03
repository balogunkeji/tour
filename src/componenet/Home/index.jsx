import React from "react";
import { useState, useEffect } from "react";
import Loading from "../loading";
import { Flex, Center, Box, Button, Text } from "@chakra-ui/react";
import Tours from "../Tour/index";
const url = "https://course-api.com/react-tours-project";

function Home() {
	const [isLoading, setIsLoading] = useState(false);
	const [tours, setTours] = useState([]);

	const removeTour = (id) => {
		const newTours = tours.filter((tour) => tour.id !== id);
		setTours(newTours);
	};

	const fetchData = async () => {
		setIsLoading(true);
		try {
			const res = await fetch(url);
			if (!res.ok) {
				throw new Error(res.status);
			}
			const tours = await res.json();
			console.log(tours);
			setIsLoading(false);
			setTours(tours);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	if (isLoading) {
		return (
			<Flex h="100vh" justify="center" align="center" bg="#f1f5f8" w="100vw">
				<Loading />
			</Flex>
		);
	}
	if (tours.length === 0) {
		return (
			<Flex h="100vh" justify="center" align="center" bg="#f1f5f8" w="100vw">
				<Box className="title">
					<Center>
						<Text as="h1" fontSize="2rem" fontWeight="bold">
							No tours left
						</Text>
					</Center>
					<Center>
						<Button
							onClick={() => fetchData()}
							color="#49a6e9"
							fontSize="1.5rem">
							refresh
						</Button>
					</Center>
				</Box>
			</Flex>
		);
	}
	return (
		<Flex h="100%" justify="center" align="center" bg="#f1f5f8" w="100vw">
			<Tours tours={tours} removeTour={removeTour} />
		</Flex>
	);
}

export default Home;
