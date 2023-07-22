import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native';



export default function AddCartbtn() {
  return (

    <TouchableOpacity style={styles.cartBtn} >
        <Text style={{fontWeight: 'bold'}} >Add To Cart</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({

    cartBtn:{
        backgroundColor:'white',
        paddingVertical:5,
        paddingHorizontal:42,
        borderRadius:30,
        display: 'flex',
        alignItems: 'center',
    },

});