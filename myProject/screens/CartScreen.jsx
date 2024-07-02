import { View,Image, StyleSheet } from 'react-native'
import React from 'react'

export default function CartScreen() {
  return (
   <View style={styles.container}>
     <View style={styles.header}>
        <Image source={require('./../assets/images/Logo.png')} style={styles.logo}/>
        <Image source={require('./../assets/images/Search.png')} style={styles.search}/>
    </View>
   </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    top:55,
    left:24,
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  menu:{
    width:30,
    height:30,
  },
  logo:{
    left:55,
  },
  search:{
    width:30,
    height:30,
  },
})