import React, { useState } from 'react';
// import * as React from 'react';
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View, Image, ScrollView } from "react-native";
import BottomNavBar from "../components/BottomNavBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackScreenProps } from "@react-navigation/stack";
import { RootParamList } from "../App";
import ScreenView from "../container/ScreenView";
import TopNavBar from '../components/TopNavBar'
import { heightToDp } from '../config/responsive'
import MemeList from '../components/MemeList'
import config from "../config/all";

//declaring screenprop type for the JSX category screen
type ProfileScreenProps = StackScreenProps<RootParamList, "ProfileScreen">;

const ProfileScreen = ({ navigation, route }: ProfileScreenProps) => {

	const bottomNavHeight: number = config.heights.bottomNavBar;



	return (
		<SafeAreaView style={styles.container}>
			<TopNavBar />
			<ScreenView  >
				<ScrollView style={{ paddingBottom: heightToDp(0) }} >
					<MemeList/>
				</ScrollView>
			</ScreenView>
			<BottomNavBar />
		</SafeAreaView>
	);
};

export default ProfileScreen;


const styles = StyleSheet.create({
	container: {
		backgroundColor: "#bbbbbb",
		width: "100%",
		flex: 1,
	},
});
