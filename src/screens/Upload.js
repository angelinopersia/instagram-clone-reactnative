import React from "react";
import { StatusBar } from "react-native";

import styled from "styled-components";

const Upload = ({ route }) => {
	return (
		<Container>
			<StatusBar backgroundColor="#13181b" />
			<BodyText>The Upload page</BodyText>
		</Container>
	);
};

export default Upload;

const Container = styled.View`
	flex: 1;
`;

const BodyText = styled.Text`
	color: white;
`;
