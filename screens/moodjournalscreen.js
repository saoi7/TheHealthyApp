import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, Dimensions, TextInput} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {useState} from 'react';



export default function MoodJournalScreen({ navigation }) {
    const [flexDirection, setflexDirection] = useState("column");
    const [text, onChangeText] = React.useState("");
    //const [number, onChangeNumber] = React.useState(null);


    return (
        <SafeAreaView style={styles.container}>
        <View style= {styles.container2}>
          <Text style={{fontSize:30, fontWeight: "500"}}   >Mood Journal </Text>
          <Text style={{fontSize:25, fontWeight: "500"}}   > Welcome</Text>

          


                    <Text style={{fontSize:20, fontWeight: "500"}}   > Record how you feel today </Text>


<Button
 title = "View Posts"
 onPress={() =>{ navigation.navigate('Post')}}
 />
          <TextInput
        style={styles.container3}
        onChangeText={onChangeText}
        value={text}
        placeholder='How are you?'
      />
      <Button
            title="Submit post"
            onPress={() => {navigation.navigate("Post");
            fetch('http://192.168.0.29:1348/input', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  uid: 1,
                  entry: text
                })
              })}}
          />

          </View>

          </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffe066',
      alignItems: 'center',
      justifyContent: 'center',
  
    }, 
    container2: {
      flex: 1,
      backgroundColor: '#ffe066',
      marginVertical: 120,
      alignItems: 'center',
      textAlignVertical: "center"
    
    
    },
     container3: {
            height: 200,
            margin: 130,
            //borderWidth: 1,
            
            backgroundColor: 'oldlace',
            borderRadius: 9,
             width: Dimensions.get("window").width,
            textAlign: "center"
            

     }
 });

//export default UselessTextInput;
