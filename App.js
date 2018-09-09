import React,{Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View
} from 'react-native';
import Weather from './Weather';

const API_KEY = "7d72ecd1cc7d9302954368ae34551172";

export default class App extends Component {
  state = {
    isLoaded : true
  }

  

  

  componentDidMount() {
    //component 가 마운트가 되면 navigator를 통해서 현재 위치를 알아낸 후에 나의 정보를 
    //서버로 보내서 해당위치의 날씨정보를 받아온다.
    navigator.geolocation.getCurrentPosition(position => {
      this._getWeather(position.coords.latitude, position.coords.longitude);
    }),
    err => {
      this.setState({
        err : err
      })
    }
  }

  //api를 통해서 openweathermap site로 나의 앱 아이디를 보내면 서버에서는 내 위치 정보를 찿아서
  //날시 정보를 나에게 보내준다.
  _getWeather = (lat, long) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => console.log(json))
  }

  render() {
    const {isLoaded} = this.state;
    return (
      <View style={styles.container}>
        {isLoaded ? <Weather />:(<View style={styles.loading}>
          <Text style={styles.loadingText}>Loading</Text>
        </View>) }
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  loading :{
    flex:1,
    backgroundColor:"yellow",
    justifyContent : 'flex-end'
  },
  loadingText : {
    paddingLeft : 25,
    marginBottom : 100,
    fontSize:30,
    color:"#333"
  }
});