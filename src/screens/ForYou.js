import React from "react";
import { View, Button, Text } from "react-native";
import styled from "styled-components";

const ForYou = ({ route }) => {
	return (
		<Container>
			<Text style={styledText}>For you</Text>
		</Container>
	);
};

export default ForYou;

const Container = styled.View`
	background-color: black;
	flex: 1;
`;

const styledText = styled.Text`
	color: white;
`;
