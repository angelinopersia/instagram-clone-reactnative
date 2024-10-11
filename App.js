import * as React from "react";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";
import styled from "styled-components";

// Import screens
import ForYou from "./src/screens/ForYou";
import Search from "./src/screens/Search";
import Upload from "./src/screens/Upload";
import Reels from "./src/screens/Reels";
import Profile from "./src/screens/Profile";

// Import footer icons
import homeIcon from "./src/images/footer/home.png";
import homeIconFocused from "./src/images/footer/home_focus.png";

import searchIcon from "./src/images/footer/search.png";
import searchIconFocused from "./src/images/footer/search_focus.png";

import uploadIcon from "./src/images/footer/upload.png";

import reelsIcon from "./src/images/footer/reels.png";
import reelsIconFocused from "./src/images/footer/reels_focus.png";

import profileIcon from "./src/images/footer/profile.png";
import profileIconFocused from "./src/images/footer/profile_focus.png";

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer theme={DarkTheme}>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarLabel: () => {
						return null;
					},
					tabBarIcon: ({ focused }) => {
						let iconName;
						if (route.name === "ForYou") {
							iconName = focused ? homeIconFocused : homeIcon;
						} else if (route.name === "Search") {
							iconName = focused ? searchIconFocused : searchIcon;
						} else if (route.name === "Upload") {
							iconName = uploadIcon;
						} else if (route.name === "Reels") {
							iconName = focused ? reelsIconFocused : reelsIcon;
						} else if (route.name === "Profile") {
							iconName = focused
								? profileIconFocused
								: profileIcon;
							return <Icon source={iconName} profile />;
						}
						return <Icon source={iconName} />;
					},
				})}
			>
				<Tab.Screen name="ForYou" component={ForYou} />
				<Tab.Screen name="Search" component={Search} />
				<Tab.Screen name="Upload" component={Upload} />
				<Tab.Screen name="Reels" component={Reels} />
				<Tab.Screen name="Profile" component={Profile} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

const Icon = styled.Image`
	width: ${(props) => (props.profile ? "32px" : "25px")};
	height: ${(props) => (props.profile ? "32px" : "25px")};
`;
