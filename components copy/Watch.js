import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Watch() {
  return <Image source={require('../assets/watch.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 350,
    marginBottom: 8,
  },
})