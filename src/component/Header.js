import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Feather, FontAwesome5 } from "@expo/vector-icons";

const Header = ({onPress}) => {
    return (
        <View style={styles.topContainer}>
            <Text style={styles.headText}>TODO APP</Text>
            <TouchableOpacity onPress={onPress}>
                <FontAwesome5 name="trash" size={24} color="red" style={styles.headIcon}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    topContainer: {
        marginVertical: 20,
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
    },
    headText:{
        fontSize: 18,
        fontWeight: 600,
        marginRight: 110
    },
    headIcon:{
        marginLeft: 110
    }
})

export default Header;