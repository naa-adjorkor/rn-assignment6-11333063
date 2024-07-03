import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable, FlatList, ScrollView, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import Products from '../components/Products';
import {ProductData}  from '../Data/ProductData';

export default function HomeScreen({ navigation }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const cartData = await AsyncStorage.getItem('cart');
        if (cartData) {
          setCart(JSON.parse(cartData));
        }
      } catch (error) {
        console.error('Error loading cart:', error);
        Alert.alert('Error', 'Failed to load cart items');
      }
    };
    loadCart();
  }, []);

  const handleCart = () => {
    navigation.navigate('Cart', { cart, setCart });
  };

  const addToCart = async (item) => {
    try {
      const updatedCart = [...cart, { ...item, key: `${item.id}-${Date.now()}` }];
      setCart(updatedCart);
      await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
    } catch (error) {
      console.error('Error adding to cart:', error);
      Alert.alert('Error', 'Failed to add item to cart');
    }
  };

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('./../assets/images/Menu.png')} style={styles.menu} />
          <Image source={require('./../assets/images/Logo.png')} style={styles.logo} />
          <Image source={require('./../assets/images/Search.png')} style={styles.search} />
          <Pressable onPress={handleCart}>
            <Image source={require('./../assets/images/shoppingBag.png')} style={styles.bag} />
          </Pressable>
        </View>
        <View style={styles.subHeader}>
          <Text style={styles.text}>OUR STORY</Text>
          <Pressable style={styles.list}>
            <Image source={require('./../assets/images/Listview.png')} style={styles.listIcon} />
          </Pressable>
          <Pressable style={styles.filter}>
            <Image source={require('./../assets/images/Filter.png')} style={styles.filterIcon} />
          </Pressable>
        </View>
        <FlatList
          data={ProductData}
          renderItem={({ item }) =>
          <Products item={item} addToCart={addToCart} />
        }
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 55,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menu: {
    width: 30,
    height: 30,
  },
  logo: {
    marginLeft: 65,
  },
  search: {
    left:20,
    width: 30,
    height: 30,
  },
  bag: {
    right:10,
    width: 30,
    height: 30,
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  text: {
    fontSize: 22,
    fontWeight: '300',
    color: '#000000',
    letterSpacing: 2.5,
  },
  list: {
    left:65,
    padding: 10,
    borderRadius: 30,
    backgroundColor: '#E8E8E8',
  },
  filter: {
    padding: 10,
    borderRadius: 30,
    backgroundColor: '#E8E8E8',
  },
  listIcon: {
    height: 26,
    width: 26,
  },
  filterIcon: {
    height: 26,
    width: 26,
  },
  flatListContent: {
    paddingBottom: 20, // Adjust as needed
  },
});

