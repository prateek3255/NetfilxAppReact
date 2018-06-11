import React, { Component } from "react";
import { Button,Header,Left, Right,Icon,  Label } from "native-base";
import {Image,View,Text} from "react-native";
import styles from "./styles";

class WhiteHeader extends Component{
    constructor(props){
        super(props);
      }
    render(){
        return(
        <Header androidStatusBarColor="white" style={styles.header}>
          <Left>
          <Image
            style={styles.image} 
            resizeMode={'contain'}
            source={require("../../../assets/netflixHeader.png")}/>
          </Left>
         
          <Right>
            <Button transparent onPress={ this.props.login}>
              <Text style={styles.headerText}>LOG IN</Text>
            </Button>
            <Button transparent onPress={ this.props.help}>
              <Text style={styles.headerText}>HELP</Text>
            </Button>
          </Right>
        </Header>
        )
    }
}

export default WhiteHeader;

