import React, {Component} from 'react';
import {SafeAreaView,Platform, StyleSheet, Text, View,FlatList, TextInput ,Button} from 'react-native';

export default class PostScreen extends Component {

  state ={
    data:[]
  }

  fetchData= async()=>{
    const response = await fetch('http://192.168.0.29:1348/user');
    const users = await response.json();
    this.setState({data: users});

  }
componentDidMount(){
  this.fetchData();
}
  render() {
    return (
      <View >
       
       <Text style={{fontSize:30, fontWeight: "500"}}   >                    Your Journal </Text>


       <FlatList
       data={this.state.data}
       keyExtractor={(item,index) => index.toString()}
       renderItem={({item}) =>

       <View style={{backgroundColor:'white',padding:10,margin:10}}>
          <Text style={{color:'black', fontWeight:'bold'}}>{item.uid}</Text>
          <Text style={{color:'black'}}>{item.entry}</Text>
         </View>

       }

       />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
  });