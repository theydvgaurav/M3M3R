import React from "react";
import { useWindowDimensions, StyleSheet, Text, View } from "react-native";
import config from "../config/all";
import { LinearGradient } from 'expo-linear-gradient';
import { heightToDp } from "../config/responsive";


type Props = {
	children?: React.ReactNode;
	styleProp?: object | null;
};

const ScreenView = ({ children, styleProp }: Props) => {
	const { width, height } = useWindowDimensions();
	const bottomNavHeight: number = config.heights.bottomNavBar;
	const topNavHeight: number = config.heights.topNavBar;

	const styles = StyleSheet.create({
		container: {
			position: "absolute",
			top: topNavHeight,
			height: height - (topNavHeight+bottomNavHeight),
			width: "100%",
            backgroundColor:"#bbafc0"
		},
	});
	return (<LinearGradient colors={['rgba(0, 238, 41, 0.8)', 'transparent']} style={styles.container}>{children}</LinearGradient>);
};

export default ScreenView;
