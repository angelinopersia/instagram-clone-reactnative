import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components";

const ForYou = ({ route }) => {
	return (
		<Container>
			<StatusBar backgroundColor="#13181b" />
			<BodyText>The stuff</BodyText>
		</Container>
	);
};

export default ForYou;

const Container = styled.View`
	flex: 1;
`;

const BodyText = styled.Text`
	color: white;
`;
