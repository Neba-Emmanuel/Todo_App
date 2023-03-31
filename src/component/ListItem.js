import React,{useState} from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Feather, FontAwesome5 } from "@expo/vector-icons";

const ListItem = ({text, onPress}) => {
  const [show, setShow] = useState(true);
  return (
    <View style={styles.container}>
      {show ? <Text style={{fontWeight: 600}}>{text}</Text> : <Text style={{fontWeight: 600, textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>{text}</Text>}
      <View style={styles.icon}>
        <View >
          
          <TouchableOpacity onPress={() => setShow(false)}>
            {show ? <Feather name="check" size={24} color="white" style={styles.check}/> : null }
          </TouchableOpacity>
        </View>
        <View style={styles.trash}>
          <TouchableOpacity onPress={onPress}>
            <FontAwesome5 name="trash" size={24} color="white"/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 310,
    height: 70,
    borderWidth: 1,
    elevation: 20,
    borderRadius: 10,
    borderColor: "#fff",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  check: {
    backgroundColor: "green",
    borderRadius: 4,
    padding: 3,
  },
  trash: {
    backgroundColor: "red",
    padding: 3,
    borderRadius: 4,
    marginLeft: 4,
  },
  icon: {
    flexDirection: "row",
  },
});

export default ListItem;
