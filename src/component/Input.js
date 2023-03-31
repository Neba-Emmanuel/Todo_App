import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

const Input = ({value, onChangeText}) => {
    return (
        <View>
           <TextInput placeholder="Add Task" style={styles.input} value={value} onChangeText={onChangeText}/>
        </View>
    )
}

Input.defaultProps = {
    initialValue: {
        content: ''
    }
}

const styles = StyleSheet.create({
    input:{
        width: 250,
        height: 50,
        borderWidth: 1,
        borderRadius: 25,
        elevation: 30,
        paddingLeft: 25,
        borderColor: '#fff',
        backgroundColor: '#fff',
        
    }
})

export default Input;