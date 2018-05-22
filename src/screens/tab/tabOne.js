import React, { Component } from "react";
import { Content,Button } from "native-base";
import {Image,View,TouchableHighlight,Text} from "react-native";
import styles from "./styles";
import BasicTab from "./basicTab";

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
            <View>
            <TouchableHighlight onPress={() => this.props.navigation.navigate("DrawerOpen")} underlayColor="white">
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
