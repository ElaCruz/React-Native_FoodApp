import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput,Button } from 'react-native';



export default function Details({ navigation }) {
  return (
    <View style={styles.container}>


      <Button title="Click Here" onPress={() => navigation.navigate('HomeScreen')}/>

    </View>

  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});