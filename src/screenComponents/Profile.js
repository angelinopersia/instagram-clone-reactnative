import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components";

const Profile = ({ route }) => {
	// const { initial } = route.params;

	return (
		<Container>
			<StatusBar backgroundColor="#13181b" />
			<BodyText>The profile page</BodyText>
		</Container>
	);
};

export default Profile;

const Container = styled.View`
	flex: 1;
`;

const BodyText = styled.Text`
	color: white;
`;
