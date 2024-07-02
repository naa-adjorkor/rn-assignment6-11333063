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
      <View style={styles.subHeader}>
        <Text style={styles.text}>OUR STORY</Text>
        <Pressable style={styles.list}><Image source={require('./../assets/images/Listview.png')} style={styles.listIcon}/></Pressable>
        <Pressable style={styles.filter}><Image source={require('./../assets/images/Filter.png')} style={styles.filterIcon}/></Pressable>
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
  },
  subHeader:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    top:30,
  },
  text:{
    fontSize:22,
    fontWeight:'300',
    color:'#000000',
    letterSpacing:2.5,
  },
  list:{
    padding:15,
    borderRadius:30,
    left:35,
    backgroundColor:'#E8E8E8'
  },
  filter:{
    padding:15,
    borderRadius:30,
    backgroundColor:'#E8E8E8',
    right:42,
  },
  listIcon:{
    height:26,
    width:26,
  },
  filterIcon:{
    height:26,
    width:26,
  }
  
  

})