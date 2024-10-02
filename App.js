import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";

// Import screens
import Main from "./src/screens/Main";
import Search from "./src/screens/Search";
import Upload from "./src/screens/Upload";
import Reels from "./src/screens/Reels";
import Profile from "./src/screens/Profile";

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="Main" component={Main} />
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
