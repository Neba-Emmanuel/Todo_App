import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Feather } from '@expo/vector-icons';

const Button = () => {
    return (
        <View>
            <TouchableOpacity style={styles.btn}>
             <Feather name="plus" size={30} color="white" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn:{
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#002D62',
        borderRadius: 25,
        backgroundColor: '#002D62',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Button;