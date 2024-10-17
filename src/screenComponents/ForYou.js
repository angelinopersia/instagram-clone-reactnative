import React from "react";
import { View, Button, Text } from "react-native";
import styled from "styled-components";

const ForYou = ({ route }) => {
	return (
		<Container>
			<BodyText>The stuff</BodyText>
		</Container>
	);
};

export default ForYou;

const Container = styled.View`
	background-color: #0f0f0f;
	flex: 1;
`;

const BodyText = styled.Text`
	color: white;
`;
