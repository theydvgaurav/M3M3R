import React, { useEffect, useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { StyleSheet, TextInput, ScrollView, Text, Image, View, Button, TouchableOpacity, Platform, Alert } from "react-native";
import BottomNavBar from "../components/BottomNavBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackScreenProps } from "@react-navigation/stack";
import { RootParamList } from "../App";
import ScreenView from "../container/ScreenView";
import TopNavBar from '../components/TopNavBar'
import Memecard from '../components/Memecard'
import { heightToDp } from '../config/responsive'
import axios from 'axios'
import * as FileSystem from 'expo-file-system';

//declaring screenprop type for the JSX category screen
type NewMemeScreenProps = StackScreenProps<RootParamList, "NewMemeScreen">;

const NewMemeScreen = ({ navigation, route }: NewMemeScreenProps) => {
    const [image, setImage] = useState('null');
    const [name, setname] = useState('')
    const [title, settitle] = useState('')
    const [url, seturl] = useState('')

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            // aspect: [4, 3],
            quality: 0.5,
        });

        if (!result.cancelled) {
            const base64 = await FileSystem.readAsStringAsync(result.uri, { encoding: 'base64' });
            setImage(`data:image/jpg;base64,${base64}`);
        }
    }

    const AddPostHandler = (event: any) => {
        event.preventDefault();

        let dt = image
        if (url) {
            dt = url.toString();
        }

        const post = {
            name: name,
            title: title,
            data: dt,
        };


        setname('');
        settitle('');
        seturl('');
        setImage('');

        let check = true;
        if (name.length === 0 || dt.length === 0 || title.length === 0) {
            check = false;
        }
        if (check) {
            axios.post('https://m3m3r.herokuapp.com/app/feed', post)
                .then(response => {
                    if (response.status == 200)
                        alert('Post Successfully Uploaded')
                })
        }
        else {
            alert("Something is missing. Fill every datails accordingly")
        }

    };

    return (
        <SafeAreaView style={styles.container}>
            <TopNavBar />
            <ScreenView  >
                <ScrollView style={{ paddingBottom: heightToDp(0) }} >
                    <View style={styles.formContainer}>
                        <Text style={styles.title} >Add a New Meme</Text>
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="  Name"
                            value={name}
                            placeholderTextColor="#BABABA"
                            autoCapitalize="none"
                            onChangeText={(name) => setname(name)}

                        />
                        <TextInput
                            style={styles.input}
                            underlineColorAndroid="transparent"
                            placeholder="  Meme Caption"
                            value={title}
                            placeholderTextColor="#BABABA"
                            autoCapitalize="none"
                            onChangeText={(title) => settitle(title)}

                        />
                        <TouchableOpacity
                            onPress={pickImage}
                        >
                            <Image resizeMode={'contain'} source={image == 'null' ? require('../assets/upload.png') : { uri: image }} style={styles.avatar} />
                        </TouchableOpacity>


                        <Text style={styles.text} >Or</Text>

                        <TextInput
                            style={styles.input}
                            underlineColorAndroid="#e5e5e5"
                            placeholder="  URL"
                            placeholderTextColor="#BABABA"
                            value={url}
                            autoCapitalize="none"
                            onChangeText={url => seturl(url)}
                        />
                        <View style={styles.button} >
                            <Button
                                onPress={AddPostHandler}
                                title="Update"
                                // 66A36E
                                // 6150FB
                                color="#66A36E"
                            />
                        </View>
                    </View>
                </ScrollView>
            </ScreenView>
            <BottomNavBar />
        </SafeAreaView>
    );
};

export default NewMemeScreen;


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#bbbbbb",
        width: "100%",
        flex: 1,
    },
    input: {
        width: 'auto',
        height: heightToDp(4.375),
        marginBottom: heightToDp(1.125),
        marginTop: heightToDp(1.07),
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "#BABABA"
    },
    formContainer: {
        paddingTop: heightToDp(0.625),
        paddingBottom: heightToDp(2.5),
        paddingLeft: heightToDp(1.25),
        paddingRight: heightToDp(1.25),
        margin: heightToDp(0.625),
        width: "auto",
        height: 'auto',
        justifyContent: "center",
        backgroundColor: "white"
    },
    text: {
        marginTop: heightToDp(1.875),
        marginBottom: heightToDp(1.875),
        fontSize: heightToDp(1.875),
        textAlign: 'center'
    },
    button: {
        marginTop: heightToDp(5),
        marginBottom: heightToDp(5),
    },
    avatar: {
        marginTop: heightToDp(3.5),
        width: heightToDp(25),
        height: heightToDp(25),
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: heightToDp(3.5),
        borderWidth: 1,
        borderColor: '#BABABA'
    },
    title: {
        fontSize: heightToDp(2.5),
        fontStyle: 'italic',
        textAlign: 'center',
        marginBottom: heightToDp(6.25),
    },


});