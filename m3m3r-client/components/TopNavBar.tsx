//main sticky TOP navbar on almost every page
import React from "react";
import {
	StyleSheet,
	Text,
	View,
} from "react-native";
import config from "../config/all";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootParamList } from "../App";
import { heightToDp } from "../config/responsive";

const TopNavBar = () => {
	const navigation =
		useNavigation<StackNavigationProp<RootParamList, "TopNavBar">>();
	const route = useRoute<RouteProp<RootParamList, "TopNavBar">>(); //might need for changing colour if selected
	const navHeight = config.heights.topNavBar;
	const styles = StyleSheet.create({
		container: {
			height: navHeight,
			backgroundColor: '#ffffff',
			flexDirection: 'row',
			justifyContent: 'space-around',
			alignItems: 'center',
			borderWidth: 2,
			borderColor: "#bababa",
			padding : 10,

		},
		text: {
			fontSize: heightToDp(5),
			fontWeight: 'bold',
			fontStyle: 'italic'
		}
	});
	return (
		<View style={styles.container}>
			<Text style={styles.text} > {'Memer'} </Text>
		</View>
	);
};

export default TopNavBar;