import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


//name of your component is TodoItem.
//the file which consists your TodoItem 
//component is todoItem.js.

//here,we'll be receiving props
export default function TodoItem( {item/*, pressHandler*/} ) {
return (
   // <TouchableOpacity onPress={() => pressHandler(item.key)}>
    <Text style = {styles.item}>{item.text}</Text>
//</TouchableOpacity>
    
)
}


const styles = StyleSheet.create({
  
    item:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10
    }

})
