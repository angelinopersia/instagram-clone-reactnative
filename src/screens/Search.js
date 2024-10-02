import React from "react";
import { View, Button, Text } from "react-native";
import styled from "styled-components";

const Search = ({ route }) => {
	// const { initial } = route.params;

	return (
		<Container>
			<Text>The Search page</Text>
		</Container>
	);
};

export default Search;

const Container = styled.View`
	background-color: white;
	flex: 1;
`;
