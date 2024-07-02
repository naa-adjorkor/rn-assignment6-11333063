import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'


const addIcon = require('./../assets/images/add_circle.png');
export default function Products({item}) {
  return (
    <View>
    <View style={styles.body}>
        <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.image}/>
            <Pressable style={styles.addIcon}><Image source={addIcon} style={styles.add}/></Pressable>
        </View>
    </View>
    <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>{item.price}</Text>
    </View>
    
    </View>
)
}

const styles = StyleSheet.create({
body:{
    top:40,
},
imageContainer:{
    position:'relative',
},
image:{
    marginRight:12,
    width:175,
    height:250,
},
addIcon:{
    position:'absolute',
    bottom:8,
    left:'76%',
},
add:{
    width:30,
    height:30,
},
textContainer:{
    top:45,
    marginBottom:20,
},
title:{
    fontSize:18,
    fontWeight:'300',
    color:'#000',
},
description:{
    fontSize:14,
    fontWeight:'300',
    color:'#AAAAAA',
},
price:{
    fontSize:20,
    fontWeight:'300',
    color:'#FFA100',
},





})