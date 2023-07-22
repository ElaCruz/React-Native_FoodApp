import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity } from 'react-native';



export default function Scrollables( ) {
  return (

    <ScrollView horizontal={true} style={styles.scrolls}>

        <View style={styles.foods}>
          <View style = {styles.backg}>
            <Image source = {require('../assets/images/ham.png')} style={styles.img1} />
          </View>
          <Text style={{fontWeight: 'bold', textAlign: 'center'}}>All</Text>
        </View>

        <View style={styles.foods}>
          <View style = {styles.backg1}>
            <Image source = {require('../assets/images/chicken.png')} style={styles.img1} />
          </View>
          <Text style={{color: 'gray', textAlign: 'center'}}>Fries</Text>
        </View>

        <View style={styles.foods}>
          <View style = {styles.backg1}>
            <Image source = {require('../assets/images/spag.png')} style={styles.img1} />
          </View>
          <Text style={{color: 'gray', textAlign: 'center'}}>Meals</Text>
        </View>

        <View style={styles.foods}>
          <View style = {styles.backg1}>
            <Image source = {require('../assets/images/ham.png')} style={styles.img1} />
          </View>
          <Text style={{color: 'gray', textAlign: 'center'}}>Burger</Text>
        </View>

        <View style={styles.foods}>
          <View style = {styles.backg1}>
            <Image source = {require('../assets/images/chicken.png')} style={styles.img1} />
          </View>
          <Text style={{color: 'gray', textAlign: 'center'}}>Fries</Text>
        </View>

        <View style={styles.foods}>
          <View style = {styles.backg1}>
            <Image source = {require('../assets/images/spag.png')} style={styles.img1} />
          </View>
          <Text style={{color: 'gray', textAlign: 'center'}}>Meals</Text>
        </View>

    </ScrollView>


  );
}


const styles = StyleSheet.create({
    scrolls: {
        display:'flex',
        flexDirection: 'row',
        minHeight: 60,
        marginTop: 30,
        marginLeft:20,
    
      },
    
      foods: {
        justifyContent: 'center',
        marginRight: 20,
      },
    
      backg :{
        height: 57,
        width: 57,
        borderRadius: 200,
        backgroundColor: 'black',
      },
    
      backg1 :{
        height: 57,
        width: 57,
        borderRadius: 200,
        backgroundColor: '#EBEBEB',
      },
    
      img1: {
        width:50,
        height:50,
        justifyContent: 'center',
        marginLeft: 4,
        marginTop:3,
      },

  
});