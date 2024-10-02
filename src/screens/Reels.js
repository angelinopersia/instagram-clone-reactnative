import React from "react";
import { View, Button, Text } from "react-native";
import styled from "styled-components";

const Reels = ({ route }) => {
	// const { initial } = route.params;

	return (
		<Container>
			<Text>The Reels page</Text>
		</Container>
	);
};

export default Reels;

const Container = styled.View`
	background-color: white;
	flex: 1;
`;
