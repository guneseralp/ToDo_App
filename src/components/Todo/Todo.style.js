import { StyleSheet } from "react-native";

export default StyleSheet.create ({
    task:{
        backgroundColor:'#FFF',
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom: 20,

    },
    taskLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap'
    },
    kare:{
        width:24,
        height:24,
        backgroundColor:'aqua',
        opacity:0.4,
        borderRadius:5,
        marginRight:15
    },
    taskText:{
        maxWidth:'80%'
    },
    circle:{
        width:12,
        height:12,
        borderColor:'aqua',
        borderWidth:2
    },
})