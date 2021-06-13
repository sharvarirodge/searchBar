import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View , SearchBar} from 'react-native';


//name of your component is Header.
//the file which consists your Header 
//component is header.js.
export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Menu</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header:{
        height:80,
        paddingTop:38,
        backgroundColor:'coral',
    },

    title:{
        textAlign:'center',
        color:'#fff',
        fontSize: 20,
        fontWeight:'bold'
    }
})
