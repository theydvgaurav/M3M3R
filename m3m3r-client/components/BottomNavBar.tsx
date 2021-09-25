//main sticky BOTTOM navbar on almost every page 
import React from "react";
import {
	useWindowDimensions,
	Image,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from "react-native";
import config from "../config/all";
import ScreenView from "../container/ScreenView";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootParamList } from "../App";
import { useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { heightToDp } from "../config/responsive";

const BottomNavBar = () => {
	//accessing theme colors
	const { colors } = useTheme();
	const navigation =
		useNavigation<StackNavigationProp<RootParamList, "BottomNavBar">>();
	const route = useRoute<RouteProp<RootParamList, "BottomNavBar">>(); //might need for changing colour if selected
	const { width, height } = useWindowDimensions();
	const navHeight = config.heights.bottomNavBar;
	const styles = StyleSheet.create({
		nav: {
			backgroundColor: '#ffffff',
			position: "absolute",
			bottom: 0,
			alignSelf: "stretch",
			right: 0,
			left: 0,
			width: "100%",
			height: navHeight,
			borderWidth: 1,
			borderColor: "#bababa"
		},
		navButtons: {
			flex: 1,
			flexDirection: "row",
			justifyContent: "space-evenly",
			alignItems: "center",
		},
		Icons: {
			width: heightToDp(3.75),
			height: heightToDp(3.75),
		},
	});
	return (
			<View style={styles.nav}>
				<View style={styles.navButtons}>
					<TouchableOpacity
						onPress={() => {
							navigation.push("HomeScreen");
						}}
					>
						<Image
							style={styles.Icons}
							source={require("../assets/home.png")}
						/>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => {
							navigation.push("NewMemeScreen");
						}}
					>
						<Image
							style={styles.Icons}
							source={require("../assets/new.png")}
						/>
					</TouchableOpacity>

				</View>
			</View>
	);
};

export default BottomNavBar;
