import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';


//import all components
import Header  from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';


export default function App() {
  
  const [todos, setTodos] = useState ([
    { text :'Oranges', key:'1'},
    { text: 'Coffee', key: '2' },
    { text: 'Milk', key: '3' },
    { text: 'Bread', key: '4' },
    { text: 'Almonds', key: '5' },
  ]);


  /*const pressHandler = (key) => {
    setTodos((prevTodos) =>{
    return prevTodos.filter(todo => todo.key !=key);
    });
  }*/

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        {text :text, key:Math.random().toString()},
        ...prevTodos

      ]
    })
  }

  

//////




  return (
    <View style={styles.container}>
    {
      <Header/>
    }
      <View style = {styles.content}>
      {
        <AddTodo submitHandler = {submitHandler}/>
      }
        <View style = {styles.list}>



            <FlatList
              //what data you want here ?
              //declare it below expo
              data={todos}
              renderItem = {({ item }) => (
                //
               // <TodoItem item ={item} pressHandler = {pressHandler}/>
                <TodoItem item={item}/>
                //for search bar
               
              )}
            //ListHeaderComponent={this.renderHeader}
            />

                



        </View>
      </View>
    </View>
  );
              }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
   
  },

  content:{
    padding:40,
  },

  list:{
    marginTop:20,
  }
  
});
