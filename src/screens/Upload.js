import React from "react";
import { View, Button, Text } from "react-native";
import styled from "styled-components";

const Upload = ({ route }) => {
	// const { initial } = route.params;

	return (
		<Container>
			<BodyText>The Upload page</BodyText>
		</Container>
	);
};

export default Upload;

const Container = styled.View`
	background-color: #0f0f0f;
	flex: 1;
`;

const BodyText = styled.Text`
	color: white;
`;
