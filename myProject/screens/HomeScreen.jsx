import { View, Text, StyleSheet, Image, Pressable, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Products from '../components/Products';
import { ProductData } from '../Data/ProductData';



export default function HomeScreen({navigation}) {
  const [numColumns, setNumColumns] = useState(2);

  const handleCart = () =>{
    navigation.navigate('Cart')
}
  return (
 <ScrollView style={styles.scroll}>
     <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./../assets/images/Menu.png')} style={styles.menu}/>
        <Image source={require('./../assets/images/Logo.png')} style={styles.logo}/>
        <Image source={require('./../assets/images/Search.png')} style={styles.search}/>
        <Pressable onPress={handleCart}><Image source={require('./../assets/images/shoppingBag.png')} style={styles.bag}/></Pressable>
      </View>
      <View style={styles.subHeader}>
        <Text style={styles.text}>OUR STORY</Text>
        <Pressable style={styles.list}><Image source={require('./../assets/images/Listview.png')} style={styles.listIcon}/></Pressable>
        <Pressable style={styles.filter}><Image source={require('./../assets/images/Filter.png')} style={styles.filterIcon}/></Pressable>
      </View>
      <FlatList
      key={numColumns}
      data={ProductData}
      renderItem={({item}) => 
        <Products item={item}/>}
      keyExtractor={item => item.id}
      numColumns={numColumns}
      contentContainerStyle={styles.flatListContent}
      />
    </View>
 </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll:{
    flex:1,
  },
  container:{
    flex:1,
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
  },
  flatListContainer: {
    paddingBottom: 20, 
  },


  
  

})