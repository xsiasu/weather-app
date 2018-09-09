import React, {Component} from 'react';  
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';


export default class Weather extends Component {
    // state = {
    
    // }



  render() {
    return (
        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.upper}>
                <Ionicons name="ios-rainy" size={140} color="#fff" />
                <Text style={styles.temp}>temp</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>택스트</Text>
                <Text style={styles.subtitle}>서브타이틀</Text>
            </View>
        </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper :{
    flex:1,
    alignItems:'center',
    justifyContent : 'center',
    backgroundColor:'transparent'
  },
  temp: {
    fontSize:24,
    marginTop:10,
    color:'#fff'
  },
  lower : {
    flex:1,
    alignItems:'flex-start',
    justifyContent:'flex-end',
    paddingLeft:25,
  },
  title : {
    fontSize:38,
    color :'#fff',
    fontWeight:'300',
    backgroundColor:'transparent',
    marginBottom:10
  },
  subtitle: {
    fontSize:24,
    marginBottom:100,
    color:'#fff',
    backgroundColor:'transparent'
  }
});