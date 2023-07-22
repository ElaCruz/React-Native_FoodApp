import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native';



export default function NavBar( ) {
  return (

    <View style={styles.navbar}>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-around',alignItems: 'center'}}>
        <TouchableOpacity>
            <Image source = {require('../assets/images/home.png')} style={styles.homeIcon} />
        </TouchableOpacity>

        <TouchableOpacity>
            <Image source = {require('../assets/images/search.png')} style={styles.homeIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor: 'black',height:40, width: 40, borderRadius:100,display: 'flex',justifyContent: 'center',alignItems:'center'}}>
            <Image source = {require('../assets/images/cart.png')} style={styles.cartIcon} />
        </TouchableOpacity>

        <TouchableOpacity>
            <Image source = {require('../assets/images/bell.png')} style={{width:23, height:23}} />
        </TouchableOpacity>

        <TouchableOpacity>
            <Image source = {require('../assets/images/user.png')} style={{width:20, height:20}} />
        </TouchableOpacity>



        </View>
  </View>

  );
}


const styles = StyleSheet.create({

    navbar: {
        backgroundColor:'#EBEBEB',
        borderRadius:20,
        marginHorizontal:2,
        paddingHorizontal:25,
        paddingVertical:15,
        position: 'absolute',
        bottom:0,
        // zIndex:1,
        width: '100%',
        // marginEnd:2,
      },
    
      homeIcon:{
        height:25,
        width:25,
      },
      cartIcon:{
        height:20,
        width:20,
        
        // marginLeft:6,
        // marginTop:8,
      }
  
});