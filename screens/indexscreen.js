import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity } from 'react-native'
import Emoji from 'react-native-emoji'
//import Navigator from './routes/homeStack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Index({navigation}){
  console.log("App executed");
  const [flexDirection, setflexDirection] = useState("column");

  

  return (
    <SafeAreaView style={styles.container}>
      
      <View style= {styles.container2}>
      <Text style={{fontSize:19, fontWeight: "500"}}   > How are you feeling today? </Text>
      <TouchableOpacity
      onPress={()=>
        Alert.alert("Good work!", "Things such as excercise, eating healthy, a good sleep routine, practising gratitude or even listening to music will help to keep your mood up!", [
          {text: "OK" , onPress: () => console.log("very Happy") },
        ])
      }
      >
        <Emoji name="grin" style={{fontSize:40}}/>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={()=>
        Alert.alert("This is Good!", "We are glad to hear that you are keeping happy, make sure to do at least one thing everyday which you enjoy or that makes you happy!", [
          {text: "OK" , onPress: () => console.log("happy") },
        ])
      }
      >
        <Emoji name="grinning" style={{fontSize:40}}/>
      </TouchableOpacity>


      <TouchableOpacity
      onPress={()=>
        Alert.alert("Oh No!", "In times like these, many of us are feeling overwhelmed and down. Try reaching out to a friend for a chat or maybe going for a long walk.", [
          {text: "OK" , onPress: () => console.log("sad") },
        ])
      }
      >
        <Emoji name="disappointed" style={{fontSize:40}}/>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={()=>
        Alert.alert("Don't Worry", "In such isolating times, it can be easy to get caught up in our feelings! try noting how you feel in the mood journal, staying rested and do at least one little thing that makes you happy every day!", [
          {text: "OK" , onPress: () => console.log("very sad") },
        ])
      }
      >
        <Emoji name="sob" style={{fontSize:40}}/>
      </TouchableOpacity>


      <TouchableOpacity
      onPress={()=>
        Alert.alert("Oh No!", "It seems you are feeling angry, try our mood journal and use it as an outlet for any overwhleming feelings you may have at the minute.", [
          {text: "OK" , onPress: () => console.log("angry") },
        ])
      }
      >
        <Emoji name="rage" style={{fontSize:40}}/>
      </TouchableOpacity>
      <Button
            title="Main Home"
            onPress={() => navigation.navigate('MainHomeScreen')}
          />
</View>
<View style={styles.container3}>

<ButtonLayout
 values={[["Sleep","#85a0ff","Sleep"],[ "Goal Setter ","#fb836f","GoalSetter"],[ "Mood Journal","#ffcb3e","MoodJournal"],[ "Positive Activities", "#6bf27d","PositiveActivities"]]}
      //values={[["Sleep","#85a0ff"],[ "Goal Setter ","#fb836f"],[ "Mood Journal","#ffcb3e"],[ "Positive Activities", "#6bf27d"]]}
      selectedValue={flexDirection}
      setSelectedValue={setflexDirection}
      navigation={navigation}
    >
     
    </ButtonLayout>
    


</View>


      
      
    </SafeAreaView>

  );
}

const ButtonLayout = ({
  values,
  selectedValue,
  setSelectedValue,
  navigation,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value[0]}
          onPress={() => {setSelectedValue(value[0]);
        navigation.navigate(value[2])} }
          style={[
            styles.button,
            {backgroundColor: value[1]},
            selectedValue === value[0] && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}
          >
            {value[0]}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

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