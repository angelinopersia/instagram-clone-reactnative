import * as React from "react";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as NavigationBar from "expo-navigation-bar";

NavigationBar.setBackgroundColorAsync("#13181b");

// Import screens
import Main from "./src/screens/Main";
import Upload from "./src/screens/Upload";

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer theme={DarkThemeInstagram}>
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

const DarkThemeInstagram = {
	dark: true,
	colors: {
		background: "#13181b",
		card: "#13181b",
		text: "white",
		notification: "red",
	},
};
