import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, Dimensions} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { render } from 'react-dom';
import {useState} from 'react';



export default function SleepScreen({ navigation }) {
  const [flexDirection, setflexDirection] = useState("column");
  var today = new Date();
  var time = today.getHours() + ':' + today.getMinutes();
 
 

  return (
    <SafeAreaView style={styles.container}>
    <View style= {styles.container2}>
      <Text style={{fontSize:30, fontWeight: "500"}}   > Time to wind down  </Text>
      {/* <Button
        title="Mental Health Home"
        onPress={() => navigation.navigate('Index')}
      /> */}
      <Text style={{fontSize:100, fontWeight: "500"}}   >{time} </Text>
      <Text style={{fontSize:20, fontWeight: "500"}}   >       Hours           Minutes</Text>

    </View>
    

  <View style={styles.container3}>
  <ButtonLayout
      values={[["Connect to Smart Watch","#99ddff", "ConnectToSmartWatch"],[ "Log Manually","#99ddff", "LogManually"]]}
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
  <View style={{ padding: 10, flex:1 }}>
    <View style= {styles.column}>
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
      backgroundColor: '#85a0ff',
      alignItems: 'center',
      justifyContent: 'center',
  
    }, 
    container2: {
      flex: 1,
      backgroundColor: '#85a0ff',
      marginVertical: 120,
      alignItems: 'center',
    
    },
    container3: {
      backgroundColor: '#85a0ff',
      alignItems: 'center',
      flex: 1,
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 45,
        borderRadius: 17,
        backgroundColor: "oldlace",
        //alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 10,
        minWidth: "48%",
        textAlignVertical: "center",
      },
      box: {
        width: 50,
        height: 50,
      },
      row: {
        flexDirection: "row",
        flexWrap: "wrap",
      },
      
      selected: {
        borderWidth: 0,
      },
      buttonLabel: {
        fontSize: 20,
        fontWeight: "500",
        color: "black",
        textAlign: "center",
      },
      selectedLabel: {
        color: "white",
      },
      label: {
        textAlign: "center",
        marginBottom: 10,
        fontSize: 24,
      },
       column: {
        width: Dimensions.get("window").width
      }
  });





