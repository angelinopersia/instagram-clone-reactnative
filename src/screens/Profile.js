import React from "react";
import { View, Button, Text } from "react-native";
import styled from "styled-components";

const Profile = ({ route }) => {
	// const { initial } = route.params;

	return (
		<Container>
			<Text>The profile page</Text>
		</Container>
	);
};

export default Profile;

const Container = styled.View`
	background-color: white;
	flex: 1;
`;
