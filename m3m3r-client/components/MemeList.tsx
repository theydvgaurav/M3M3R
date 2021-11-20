import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import MemeCard from "./Memecard";
import axios from 'axios';


const MemeList = () => {

    const [Data, setData] = useState([]);

    const getPosts = () => {
        axios.get('https://m3m3r.herokuapp.com/app/feed',{
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            }
        })
            .then(response => setData(response.data))
    }

    useEffect(() => {
        getPosts();
    }, [])

        console.log({Data})

    return (
        <>
             
             {Data.map((post: { name: string, title: string, data: string , _id : string}) => (
                <MemeCard name={post.name} title={post.title}  data={post.data} id={post._id} />
            ))}
        </>

    );

};

export default MemeList;

