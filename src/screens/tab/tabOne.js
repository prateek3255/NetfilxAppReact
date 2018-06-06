import React, { Component } from "react";
import { Content,Button } from "native-base";
import {Image,View,TouchableHighlight,Text,StatusBar} from "react-native";
import styles from "./styles";
import debounce from './../DisableDoubleTap/DoubleTap';

class TabOne extends Component {
  // static navigationOptions={
  //   title:'Series'
  // }

  constructor(props){
    super(props);
  }
  render() {
    return (
      <Content>
      <StatusBar backgroundColor='#2B2C30' barStyle='light-content' />
            <View>
            <TouchableHighlight  onPress={debounce(() => this.props.navigation.navigate("Detail",{image:0,name:'Breaking Bad'}))} underlayColor="white">
            <View>
              <Image
               style={styles.image} 
               source={require("../../../assets/breaking.jpg")}/>
          </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate("Detail",{image:1,name:'Narcos'})} underlayColor="white">
            <View>
              <Image
               style={styles.image} 
               source={require("../../../assets/narcos.jpg")}/>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.props.navigation.navigate("Detail",{image:2,name:'Stranger Things'})}>
            <View>
              <Image
               style={styles.image} 
               source={require("../../../assets/stranger.jpg")}/>
            </View>
         </TouchableHighlight>
         <TouchableHighlight onPress={() => this.props.navigation.navigate("Detail",{image:3,name:'Game of thrones'})}>
            <View>
              <Image
               style={styles.image} 
               source={require("../../../assets/thrones.jpg")}/>
                </View>
         </TouchableHighlight>
         </View>
      </Content>
    );
  }
}
export default TabOne;
