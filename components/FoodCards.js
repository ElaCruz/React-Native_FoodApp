import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity } from 'react-native';
import AddCartbtn from './AddCartbtn';
import Details from '../Details';
export default function FoodCards() {


  return ( 

    <ScrollView vertical={true} style={{height:500}} >

    <View style={{fontWeight: 'bold', marginTop:20, marginLeft:20}}>
      <Text style={{fontWeight: 'bold',fontSize: 22, marginLeft:6}}>Popular Items</Text>

      <ScrollView horizontal={true} style={styles.main}>

        <View style={styles.mainDish}>
          <View style={styles.fooText}>

            <Text style= {{color: 'white', fontWeight: 'bold', fontSize: 25,width:200}}>Cheese Hot Hamburger</Text>
            <Text style= {{color: 'white', fontWeight: 'bold', fontSize: 18, marginTop:55}}>$8.99</Text>
            <Text style= {{color: 'white', fontWeight: 'bold', fontSize: 15}}>4.99</Text>

            <View style={{display: 'flex', flexDirection: 'row', marginTop:20}}>
              
              {/* <View>  */}
                <AddCartbtn  /> 
              {/* </View> */}

              <View style={styles.iconsCover}>

                <TouchableOpacity style={styles.favbg}>
                  <Image source = {require('../assets/images/fav.png')} style={styles.favIcon} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.favbg}>
                  <Image source = {require('../assets/images/fav.png')} style={styles.favIcon} />
                </TouchableOpacity>

              </View>

            </View>
          </View>

          <Image source = {require('../assets/images/hamburger.png')} style={styles.dish1} />

        </View> 

        <View style={styles.mainDish}>

        <View style={styles.fooText}>

          <Text style= {{color: 'white', fontWeight: 'bold', fontSize: 22,width:200}}>Cheese Hot Hamburger</Text>
          <Text style= {{color: 'white', fontWeight: 'bold', fontSize: 18, marginTop:55}}>$8.99</Text>
          <Text style= {{color: 'white', fontWeight: 'bold', fontSize: 15}}>4.99</Text>

          <View style={{display: 'flex', flexDirection: 'row', marginTop:20}}>
             <AddCartbtn /> 

            <View style={styles.iconsCover}>

              <TouchableOpacity style={styles.favbg}>
                <Image source = {require('../assets/images/fav.png')} style={styles.favIcon} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.favbg}>
                <Image source = {require('../assets/images/fav.png')} style={styles.favIcon} />
              </TouchableOpacity>

            </View>

          </View>
          </View>


          <Image source = {require('../assets/images/choch.png')} style={styles.dish1} />
        </View> 

      </ScrollView>
    </View>

    {/* Part2 */} 

    <ScrollView vertical={true}  style= {{marginLeft:20}}>
      <View style={{display:'flex', justifyContent: 'space-between', flexDirection:'row', marginTop:15,marginHorizontal:20}}>
        <Text style={{fontWeight: 'bold',fontSize: 22, marginLeft:-3}}>Delicious Items</Text>
        <TouchableOpacity><Text style={{fontWeight: 'bold',fontSize: 16, marginLeft:6, color: 'orange', marginTop:7}}>See All</Text></TouchableOpacity>
      </View>


      <View>
          <View style={styles.fooText}>

            <Text style= {{color: 'white', fontWeight: 'bold', fontSize: 25,width:190}}>Cameroonian Hot Chicken</Text>
            <Text style= {{color: 'white', fontWeight: 'bold', fontSize: 18, marginTop:55}}>$8.99</Text>
            <Text style= {{color: 'white', fontWeight: 'bold', fontSize: 15}}>4.99</Text>

            <View style={{display: 'flex', flexDirection: 'row', marginTop:20}}>
              <View> 
                <AddCartbtn onPress={() => navigation.navigate('two')} /> 
              </View>

              <View style={styles.iconsCover}>

                <TouchableOpacity style={styles.favbg}>
                  <Image source = {require('../assets/images/fav.png')} style={styles.favIcon} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.favbg}>
                  <Image source = {require('../assets/images/fav.png')} style={styles.favIcon} />
                </TouchableOpacity>

              </View>

            </View>
          </View>

          <Image source = {require('../assets/images/chick.png')} style={styles.dish3} />

        </View> 

    </ScrollView>
  

  </ScrollView>



  );
}


const styles = StyleSheet.create({

  main:{
    marginTop: 8,
  },

  dish1: {
    width:300,
    height:280,
    justifyContent: 'center',
    borderRadius:30,
    marginRight:20,
  },

  dish3: {
    width:326,
    height:280,
    justifyContent: 'center',
    borderRadius:30,
    marginRight:20,
    marginTop:5,
  },

  fooText:{
    position: 'absolute',
    zIndex:1,
    margin:20,
  },

  // cartBtn:{
  //   backgroundColor:'white',
  //   paddingVertical:5,
  //   paddingHorizontal:42,
  //   borderRadius:30,
  // },

  iconsCover:{
    display: 'flex',
    flexDirection: 'row',
    marginStart: 10
  },

  favbg:{
    height:40,
    width: 40,
    borderRadius:200,
    backgroundColor: '#EBEBEB',
    marginRight: 10,
    opacity: .5
  },

  favIcon:{
    height:23,
    width:23,
    marginLeft: 8,
    marginTop: 10,
    position: 'absolute'
  },

    
    
});