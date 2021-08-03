import React from 'react'
import { Flex, Spinner } from "@chakra-ui/react";

function Loading() {
 return (
 	<Flex justify="center" align="center">
			<Spinner
				thickness="5px"
				speed="0.65s"
				borderTopColor="#49a6e9"
				borderRightColor="#8bcbf9"
				size="xl"
			/>
		</Flex>
 )
}

export default Loading
