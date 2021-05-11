import * as React from 'react';
import { SafeAreaView, KeyboardAvoidingView, StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, Dimensions, ScrollView, TextInput, Keyboard } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {useState} from 'react';
import Task from '../components/Task';



export default function PositiveActivitiesScreen({ navigation }) {
   const [flexDirection, setflexDirection] = useState("column");
   const [task, setTask] = useState();
   //could hard code into square brackets
  const [taskItems, setTaskItems] = useState(["Walk","Text a friend", "Write a gratitude list", "A simple act of kindness", "Excercise", "Get some fresh air","Listen to music"," Read a book"," Take a hot shower/Bath","Watch a movie","Recall a happy memory", "Go for a swim", "Yoga", "Get a manicure or pedicure" ,"Explore somewhere new", "Go to a park", "Call a family member","Look at old photos","Hiking" ,"Stargazing","Light a scented candle","Do a puzzle","Watch a sunrise or sunset"," Go sightseeing", "Meditate" ," Play a sport", "Enjoy a cup of tea", "Cooking","Play a musical instrument"]);
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
      <Text style={styles.sectionTitle}>Positive Activities </Text> 
      <Button title="Random suggestion"
      onPress={()=>{
        var rand = Math.floor(Math.random()*taskItems.length);
        Alert.alert("Random activity", taskItems[rand], [
        {text: "OK"  },
      ])} }/>
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
      <TextInput style={styles.input} placeholder={'Enter your own favourite activities'} value={task} onChangeText={text => setTask(text)} />
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
  backgroundColor: '#6bf27d',
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