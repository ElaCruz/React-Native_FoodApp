import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native';



export default function Filterbtn() {
  return (

    <TouchableOpacity style={styles.filter}>
        <Image source = {require('../assets/images/filter.png')} style={styles.filterIcon} />
    </TouchableOpacity>

  );
}


const styles = StyleSheet.create({

    filter:{
        height: 50,
        backgroundColor: 'orange',
        width: 50,
        borderRadius:500,
    },
    
    filterIcon:{
        marginLeft:12,
        marginTop: 16,
        minWidth:25,
        minHeight:20,
    },
    
});