import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header></Header>
      <Paragraph>
        Welcome to The Healthy App
      </Paragraph>
      <Button
        mode="contained"
       style={{backgroundColor: "#34cceb"}}
        onPress={() => navigation.navigate('Home')}
      >
        Mental Health
      </Button>
      <Button
        mode="contained"
        style={{backgroundColor: "#eb5542"}}
        //onPress={() => navigation.navigate('RegisterScreen')}
      >
        Nutrition
      </Button>
      <Button
        mode="contained"
       style={{backgroundColor: "#6ed16d"}}
       // onPress={() => navigation.navigate('ExcerciseScreen')}
      >
        Excercise
      </Button>

      <Button
        mode="outlined"
       style={{backgroundColor: "white"}}
        onPress={() => navigation.navigate('Start')}
        
      >
          Log Out
      </Button>

      
   
    </Background>
    
  )
}