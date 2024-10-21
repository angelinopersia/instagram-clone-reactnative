import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";

const Search = ({ route }) => {
	return (
		<Container>
			<StatusBar backgroundColor="#13181b" />
			<BodyText>The Search page</BodyText>
			<SafeAreaView style={{ backgroundColor: "black" }}></SafeAreaView>
		</Container>
	);
};

export default Search;

const Container = styled.View`
	flex: 1;
`;

const BodyText = styled.Text`
	color: white;
`;
