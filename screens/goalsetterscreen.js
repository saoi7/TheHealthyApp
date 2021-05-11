import * as React from 'react';
import { SafeAreaView, KeyboardAvoidingView, StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, Dimensions, ScrollView, TextInput, Keyboard } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {useState} from 'react';
//import Task from './components/Task';
import Task from '../components/Task';



export default function GoalSetterScreen({ navigation }) {
   const [flexDirection, setflexDirection] = useState("column");
   const [task, setTask] = useState();
   //could hard code into square brackets
  const [taskItems, setTaskItems] = useState([]);
const handleAddTask = () => {
  Keyboard.dismiss();
  setTaskItems([...taskItems, task])
  setTask(null);
}

const completeTask = (index) => {
  let itemsCopy = [...taskItems];
  itemsCopy.splice(index, 1);
  setTaskItems(itemsCopy)
}

return (
  <View style={styles.container}>
    {/* Added this scroll view to enable scrolling when list gets longer than the page */}
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1
      }}
      keyboardShouldPersistTaps='handled'
    >

    {/* Today's Tasks */}
    <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Today's Goals</Text>
      <Text style={styles.sectionTitle}>Set long term, short term or even daily goals!</Text>
      <View style={styles.items}>
        {/* This is where the tasks will go! */}
        {
          taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                <Task text={item} /> 
              </TouchableOpacity>
            )
          })
        }
      </View>
    </View>
      
    </ScrollView>

    {/* Write a task */}
    {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
    >
      <TextInput style={styles.input} placeholder={'Write a goal'} value={task} onChangeText={text => setTask(text)} />
      <TouchableOpacity onPress={() => handleAddTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
    
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fb836f',
},
tasksWrapper: {
  paddingTop: 80,
  paddingHorizontal: 20,
},
sectionTitle: {
  fontSize: 24,
  fontWeight: 'bold'
},
items: {
  marginTop: 30,
},
writeTaskWrapper: {
  position: 'absolute',
  bottom: 60,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center'
},
input: {
  paddingVertical: 15,
  paddingHorizontal: 15,
  backgroundColor: '#FFF',
  borderRadius: 60,
  borderColor: '#C0C0C0',
  borderWidth: 1,
  width: 250,
},
addWrapper: {
  width: 60,
  height: 60,
  backgroundColor: '#FFF',
  borderRadius: 60,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#C0C0C0',
  borderWidth: 1,
},
addText: {},
});