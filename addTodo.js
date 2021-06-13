import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function AddTodo({submitHandler}) {
    const [text,setText] = useState('');

    const changeHandler = (val)  => {
        setText(val);
    }

    return (
        <View>
            <TextInput
            style = {styles.input}
            placeholder ='Type Item'
            onChangeText = {changeHandler}
            />

            <Button style={styles.button} onPress ={() => submitHandler(text)} title ='+' color = 'coral'/>
        </View>
    )

}



const styles = StyleSheet.create({
    input : {
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#bbb',
        fontSize:20
        },

    button:{
        borderRadius:60,
    }

    

})
