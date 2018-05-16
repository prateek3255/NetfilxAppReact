import React, { Component } from "react";
import { Content,Button } from "native-base";
import {Image,View,TouchableHighlight,Text} from "react-native";
import styles from "./styles";

class TabOne extends Component {

  constructor(props){
    super(props);
  }
  render() {
    return (
      <Content>
            <View>
            <TouchableHighlight onPress={() => this.props.navigation.navigate("DrawerOpen")} underlayColor="white">
            <View>
              <Image
               style={styles.image} 
               source={require("../../../assets/breaking.jpg")}/>
          </View>
          </TouchableHighlight>
              <Image
               style={styles.image} 
               source={require("../../../assets/narcos.jpg")}/>
       
              <Image
               style={styles.image} 
               source={require("../../../assets/stranger.jpg")}/>
         
              <Image
               style={styles.image} 
               source={require("../../../assets/thrones.jpg")}/>
         </View>
      </Content>
    );
  }
}
export default TabOne;
