import * as React from "react";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "react-native";
import { Text } from "react-native";
import styled from "styled-components";

// Import screens
import Main from "./src/screens/Main";
import Upload from "./src/screens/Upload";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer theme={DarkTheme}>
			<Stack.Navigator
				initialRouteName="Main"
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name="Main" component={Main} />
				<Stack.Screen name="Upload" component={Upload} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
