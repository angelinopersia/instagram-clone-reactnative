import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components";

const Reels = ({ route }) => {
	return (
		<Container>
			<StatusBar backgroundColor="#13181b" />
			<BodyText>The Reels page</BodyText>
		</Container>
	);
};

export default Reels;

const Container = styled.View`
	flex: 1;
`;

const BodyText = styled.Text`
	color: white;
`;
