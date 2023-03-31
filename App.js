import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, FlatList, View, Keyboard, TouchableOpacity, ScrollView } from "react-native";
import Button from "./src/component/Button";
import Input from "./src/component/Input";
import ListItem from "./src/component/ListItem";
import Header from "./src/component/Header";

const App = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const deleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  const deleteAllTask = (index) => {
    let deleteAll = [...taskItems];
    deleteAll.slice(0, 0);
    setTaskItems([])
  }
  return (
    <View style={styles.container}>
      <View>
        <Header style={{flex: 1}} onPress={() => deleteAllTask()}/>
      </View>
      <StatusBar style="auto" />  
      
        <View style={{flex: 4}}>
          {
            taskItems.map((item, index) => {
              return (
                
                <View style={styles.listStyle}>
                  <ListItem text={item} key={index}  onPress={() => deleteTask(index)}/> 
                </View>
                
              )
            })
          }
        </View>
      
      <View style={styles.bottomContainer}>
        <Input value={task} onChangeText={text => setTask(text)} />
        <Button onPress={() => handleAddTask()}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'flex-end',
    marginTop: 550,
    flex: 2
  },
  listStyle:{
    marginBottom: 15,
    alignSelf: 'center'
  }

});

export default App;

