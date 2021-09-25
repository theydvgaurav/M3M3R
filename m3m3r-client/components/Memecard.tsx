import React,{useState} from "react";
import {
    useWindowDimensions,
    Image,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { heightToDp, widthToDp } from '../config/responsive'
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootParamList } from "../App";

const MemeCard = (props: { name : string, title: string,data : string }) => {
    const navigation =
        useNavigation<StackNavigationProp<RootParamList, "MemeCard">>();
    const route = useRoute<RouteProp<RootParamList, "MemeCard">>();
    const { width, height } = useWindowDimensions();
    const styles = StyleSheet.create({
        container: {
            height: 'auto',
            margin: heightToDp(1),
            padding: heightToDp(0.5),
            backgroundColor: '#ffffff',
            flexDirection: 'column',
            alignItems : 'center',
            borderRadius : 10,
        },
        Imagecontainer :{
            alignItems: 'center',
            height : heightToDp(40),
            width : heightToDp(40),
            marginBottom : heightToDp(0.25),
            // borderColor : "#0000000",
            // borderWidth : 2
        },
        bigfont : {
            fontSize : heightToDp(3),
            paddingLeft : heightToDp(1)
        },
        medfont :{
            fontSize : heightToDp(2),
            textAlign : 'center',
            fontStyle : 'italic'
        }
    });
    // console.log(heightToDp(1))
    // console.log(widthToDp(1))
    return (
        <View style={styles.container}>
            <Text style={styles.bigfont} >{props.title}</Text>
            <Text style={styles.medfont} > {'by '} {props.name}</Text>
                <Image
                    style={styles.Imagecontainer}
                    source={{ uri: props.data }}
                    resizeMode={'contain'}
                />
        </View>
    );
};

export default MemeCard;