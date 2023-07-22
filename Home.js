import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { useNavigation } from "@react-navigation/native";
import Filterbtn from './components/Filter';
import SearchBar from './components/SearchBar';
import FoodCards from './components/FoodCards';
import NavBar from './components/NavBar';
import Scrollables from './components/Scrollables';
import AddCartbtn from './components/AddCartbtn';

import { 
  SafeAreaView, StyleSheet, Text,
   View,Image,TextInput,ScrollView,Button,TouchableOpacity, Touchable, FlatList
} from 'react-native';



export default function HomeScreen({navigation}) {
  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.upperContainer}>
        <SearchBar />
        <Filterbtn onPress={() => navigation.navigate(Details)}/>
      </View>

      <View>
        <Scrollables />
      </View>

     {/* Main */}

      <View>
        <FoodCards />
      </View>

      {/* Nav Bar */}

      <View>
        <NavBar />
      </View> 
 

    </SafeAreaView>

  );
}


const styles = StyleSheet.create({

  container: {
    paddingTop: 100
  },

  upperContainer: {
    display: 'flex',
    flexDirection: 'row',

  },


});
