import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./../assets/images/Menu.png')} style={styles.menu}/>
        <Image source={require('./../assets/images/Logo.png')} style={styles.logo}/>
        <Image source={require('./../assets/images/Search.png')} style={styles.search}/>
        <Pressable><Image source={require('./../assets/images/shoppingBag.png')} style={styles.bag}/></Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    top:55,
    left:24,
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  menu:{
    width:30,
    height:30,
  },
  logo:{
   left:20,
  },
  search:{
    width:30,
    height:30,
  },
  bag:{
    width:30,
    height:30,
    right:55,
  }
})