import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import config from "./config/all";

import HomeScreen from "./screens/HomeScreen";
import NewMemeScreen from "./screens/NewMeme";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

export type RootParamList = {
	SplashScreen: undefined;
	HomeScreen: undefined;
	CategoriesScreen: undefined;
	DiscoveryScreen: undefined;
	ProfileScreen: undefined;
	TopNavBar: undefined;
	BottomNavBar: undefined;
	MemeCard : undefined;
	NewMemeScreen : undefined;
};

//create stack navigator with correct type = params for all screens
const Root = createStackNavigator<RootParamList>();

export default function App() {
	return (
		<NavigationContainer theme={config.defaultTheme}>
			<Root.Navigator
				screenOptions={{
					headerShown: true,
				}}
			>
				<Root.Screen name="HomeScreen" component={HomeScreen} options = {{headerShown : false}}/>
				<Root.Screen name="NewMemeScreen" component={NewMemeScreen} options = {{headerShown : false}}/>
			</Root.Navigator>
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