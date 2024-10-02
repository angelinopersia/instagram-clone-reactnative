import React from "react";
import { View, Button, Text } from "react-native";
import styled from "styled-components";

const Main = ({ route }) => {
	// const { initial } = route.params;

	return (
		<Container>
			<Text>The main page</Text>
		</Container>
	);
};

export default Main;

const Container = styled.View`
	background-color: white;
	flex: 1;
`;
