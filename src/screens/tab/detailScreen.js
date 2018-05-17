import React, { Component } from "react";
import { Content } from "native-base";
import {Image,View,Text} from "react-native";
import styles from "./styles";



export default class DetailScreen extends Component{
        render(){
        return (
            <View>
             <Image
               style={styles.detailImage} 
               source={require(this.props.navigation.state.params.image)}/>
            </View>
        );
    }
}

