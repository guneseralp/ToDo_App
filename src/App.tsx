import React from "react";
import { Text,View,StyleSheet,KeyboardAvoidingView, TextInput, Platform,TouchableOpacity,Keyboard } from "react-native";
import Todo from "./components/Todo";
import { useState } from "react";

const App = () => {
  const [task,setTask]= useState(); 
  const [taskItems, setTaskItems]= useState([]);
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems,task])
    setTask(null);
  }
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }

  return(
    <View style={styles.container}>
        <View style={styles.todoWrapper}>
            <Text style={styles.title}>Today's Tasks</Text>
            <View style={styles.list}>
              {/* Todo tasklar burada gözükecektir. */}
              {
                taskItems.map(
                  (item,index)=>{
                    return (
                      <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                        <Todo text={item}/>
                      </TouchableOpacity>
                      
                    
                    )
                  }
                )
              }
              
            </View>
        </View>
        {/* Todo task yazma Bölümü */}
        <KeyboardAvoidingView behavior={Platform.OS === "ios"? "padding":"height"} style={styles.keyboard} >
          <TextInput style={styles.input} placeholder="Write a Task" value={task}onChangeText={text => setTask(text)}/>
          <TouchableOpacity onPress={() => handleAddTask()} >
            <View style={styles.addTask}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        
    </View>
  )
}

export default App;
const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor: '#e0e0e0'
  },
  todoWrapper:{
    paddingTop: 80,
    paddingHorizontal:20,
  },
  title:{
    fontSize:30,
    fontWeight:'bold',
  },
  list:{
    marginTop:30
  },
  keyboard:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:'white',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1,
    width:250,

  },
  addTask:{
    width:60,
    height:60,
    backgroundColor:'white',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1,
  },
  addText:{

  }
})