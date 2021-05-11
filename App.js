import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity } from 'react-native'
import Emoji from 'react-native-emoji'
import Navigator from './routes/homeStack';

export default function App(){
  console.log("App executed");
  const [flexDirection, setflexDirection] = useState("column");

  

return (
<Navigator/>
)};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c9f0ff',
    alignItems: 'center',
    justifyContent: 'center',

  }, 
  container2: {
    flex: 1,
    backgroundColor: '#c9f0ff',
    marginVertical: 120,
    alignItems: 'center',
  
  },
  container3: {
    flex: 1,
    backgroundColor: '#c9f0ff',
  },

  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 45,
    borderRadius: 17,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 10,
    minWidth: "48%",
    textAlignVertical: "center",
  },
  
  selected: {
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 20,
    fontWeight: "500",
    color: "black",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});




