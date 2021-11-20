import React, { useState } from "react";
import axios from 'axios'
import {
    useWindowDimensions,
    Image,
    StyleSheet,
    Text,
    View,
    Button
} from "react-native";
import { heightToDp, widthToDp } from '../config/responsive'
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootParamList } from "../App";

const MemeCard = (props: { name: string, title: string, data: string, id: string }) => {
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
            alignItems: 'center',
            borderRadius: 10,
        },
        Imagecontainer: {
            alignItems: 'center',
            height: heightToDp(40),
            width: heightToDp(40),
            marginBottom: heightToDp(0.25),
            // borderColor : "#0000000",
            // borderWidth : 2
        },
        bigfont: {
            fontSize: heightToDp(3),
            paddingLeft: heightToDp(1)
        },
        medfont: {
            fontSize: heightToDp(2),
            textAlign: 'center',
            fontStyle: 'italic'
        },
        buttoncontainer: {
            flexDirection: 'row',
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
            <View style={styles.buttoncontainer}>
                <button style={{
                    marginRight: 30,
                    marginLeft: 10,
                    marginBottom: 5,
                    backgroundColor: "#51f713",
                    borderColor: "white",
                    borderRadius: 2,
                    height: 30,
                    width: 60,
                    color: "white"
                }}
                
                onClick={() => {
                    navigation.push("UpdateScreen",{id:props.id , name : props.name, title : props.title, data : props.data})
                }}

                >Edit</button>


                <button style={{
                    marginRight: 30,
                    marginLeft: 10,
                    marginBottom: 5,
                    backgroundColor: "#ff222b",
                    borderColor: "white",
                    borderRadius: 2,
                    height: 30,
                    width: 60,
                    color: "white"
                }}
                    onClick={() => {
                        axios.delete(`http://localhost:4000/app/feed/${props.id}`)
                        , window.location.reload()
                    }}
                >Delete</button>
            </View>
        </View>
    );
};

export default MemeCard;