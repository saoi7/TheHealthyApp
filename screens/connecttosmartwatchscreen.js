import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, Dimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {useState} from 'react';
import Logo from '../components/Logo'
import Watch from '../components/Watch';


export default function ConnectToSmartWatchScreen({ navigation }) {
    const [flexDirection, setflexDirection] = useState("column");

    return (
        <SafeAreaView style={styles.container}>
        <View style= {styles.container2}>
          <Text style={{fontSize:30, fontWeight: "500"}}   > Connect to your  </Text>
          <Text style={{fontSize:30, fontWeight: "500"}}   >  smart watch below </Text>

          <Button
            title="Sleep Home"
            onPress={() => navigation.navigate('Sleep')}
          />
          <Watch />
          </View>

          </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
  
    }, 
    container2: {
      flex: 1,
      backgroundColor: 'white',
      marginVertical: 120,
      alignItems: 'center',
      textAlignVertical: "center"
    
    }

});