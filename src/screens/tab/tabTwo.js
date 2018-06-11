import React, { Component } from "react";
import { Content,Button } from "native-base";
import {Image,View,TouchableWithoutFeedback,Text,StatusBar,ActivityIndicator} from "react-native";
import styles from "./styles";

class TabTwo extends Component {
  // static navigationOptions={
  //   title:'Series'
  // }

  constructor(props){
    super(props);
    this.state = {
      notLoaded:true
    }
  }

  componentDidMount(){
    this.setState({notLoaded:false});
    this.forceUpdate();
  }
  render() {
    return (
      <Content>
      <StatusBar backgroundColor='#2B2C30' barStyle='light-content' />
      <View>
        
            {/* {(
              <ActivityIndicator
                style={styles.loader}
                color="#C00"
                size="large"
              />
            )} */}
          </View>
            <View>
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Detail",{image:0,name:'Breaking Bad'})} >
            <View>
              <Image
               style={styles.image} 
               source={require("../../../assets/breaking.jpg")}/>
          </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Detail",{image:1,name:'Narcos'})} >
            <View>
              <Image
               style={styles.image} 
               source={require("../../../assets/narcos.jpg")}/>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Detail",{image:2,name:'Stranger Things'})}>
            <View>
              <Image
               style={styles.image} 
               source={require("../../../assets/stranger.jpg")}/>
            </View>
         </TouchableWithoutFeedback>
         <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Detail",{image:3,name:'Game of thrones'})}>
            <View>
              <Image
               style={styles.image} 
               source={require("../../../assets/thrones.jpg")}/>
                </View>
         </TouchableWithoutFeedback>
         </View>
      </Content>
    );
  }
}
export default TabTwo;
