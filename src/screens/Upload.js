import React from "react";
import { View, Button, Text } from "react-native";
import styled from "styled-components";

const Upload = ({ route }) => {
	// const { initial } = route.params;

	return (
		<Container>
			<Text>The Upload page</Text>
		</Container>
	);
};

export default Upload;

const Container = styled.View`
	background-color: white;
	flex: 1;
`;
