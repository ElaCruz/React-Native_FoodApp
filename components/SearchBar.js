import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput } from 'react-native';



export default function SearchBar( ) {
  return (

    <View style={styles.searhBar}>
        <Image source = {require('../assets/images/search.png')} style={styles.searchIcon} />
        <TextInput style={styles.searchText} placeholder='Search here'/>
    </View>

  );
}


const styles = StyleSheet.create({

    searhBar:{
        marginStart:30,
        width:255,
        display:'flex',
        flexDirection:'row',
        borderRadius:30,
        borderColor: 'grey',
        borderWidth: 1,
        marginHorizontal:20,
        paddingHorizontal:20,
        paddingVertical:7,
      },
    
      searchText:{
        fontWeight: 'bold',
        marginBottom:5,
      },
    
      searchIcon:{
        marginTop:3,
        marginRight:3,
      },
    
});