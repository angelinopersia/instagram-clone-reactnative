import React from "react";
import { View, Button, Text } from "react-native";
import styled from "styled-components";

const Search = ({ route }) => {
	// const { initial } = route.params;

	return (
		<Container>
			<BodyText>The Search page</BodyText>
		</Container>
	);
};

export default Search;

const Container = styled.View`
	background-color: #0f0f0f;
	flex: 1;
`;

const BodyText = styled.Text`
	color: white;
`;
