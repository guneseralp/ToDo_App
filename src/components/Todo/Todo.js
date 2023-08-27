import React from "react";
import {View,Text,StyleSheet,TouchableOpacity} from "react-native";
import styles from "./Todo.style"

const Todo = (props) => {
    return(
        <View style= {styles.task}>
            <View style= {styles.taskLeft}>
                <TouchableOpacity style= {styles.kare}></TouchableOpacity>
                <Text style= {StyleSheet.taskText}>{props.text}</Text>
            </View>
            <View style= {styles.circle}></View>
        </View>
    )
}

export default Todo;