import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styled from "styled-components";

// Import screens
import ForYou from "../screenComponents/ForYou";
import Search from "../screenComponents/Search";
import Upload from "./Upload";
import Reels from "../screenComponents/Reels";
import Profile from "../screenComponents/Profile";

// Import footer icons
import homeIcon from "../images/footer/home.png";
import homeIconFocused from "../images/footer/home_focus.png";
import searchIcon from "../images/footer/search.png";
import searchIconFocused from "../images/footer/search_focus.png";
import uploadIcon from "../images/footer/upload.png";
import reelsIcon from "../images/footer/reels.png";
import reelsIconFocused from "../images/footer/reels_focus.png";
import profileIcon from "../images/footer/profile.png";
import profileIconFocused from "../images/footer/profile_focus.png";

const Tab = createBottomTabNavigator();

export default function Main({ navigation }) {
	// This acts as a footer
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarLabel: () => {
					return null;
				},
				tabBarIcon: ({ focused }) => {
					// Decides which icon to be used in the footer
					let iconName;
					if (route.name === "ForYou") {
						iconName = focused ? homeIconFocused : homeIcon;
					} else if (route.name === "Search") {
						iconName = focused ? searchIconFocused : searchIcon;
					} else if (route.name === "Reels") {
						iconName = focused ? reelsIconFocused : reelsIcon;
					} else if (route.name === "Profile") {
						iconName = focused ? profileIconFocused : profileIcon;
						return <Icon source={iconName} profile />;
					}
					return <Icon source={iconName} />;
				},
			})}
		>
			<Tab.Screen name="ForYou" component={ForYou} />
			<Tab.Screen name="Search" component={Search} />
			{/* Upload sections on Instagram is its own page instead of being a footer tab */}
			<Tab.Screen
				name="Upload"
				component={Upload}
				options={{
					tabBarButton: () => (
						<UploadContainer
							onPress={() => navigation.navigate("Upload")}
						>
							<Icon source={uploadIcon} />
						</UploadContainer>
					),
				}}
			/>
			<Tab.Screen name="Reels" component={Reels} />
			<Tab.Screen name="Profile" component={Profile} />
		</Tab.Navigator>
	);
}

// Size of footer icons, with the profile icon needing extra tweaks
const Icon = styled.Image`
	width: ${(props) => (props.profile ? "32px" : "25px")};
	height: ${(props) => (props.profile ? "32px" : "25px")};
`;

// Upload button
const UploadContainer = styled.TouchableOpacity`
	margin-left: 25px;
	margin-right: 25px;

	align-items: center;
	justify-content: center;
`;
