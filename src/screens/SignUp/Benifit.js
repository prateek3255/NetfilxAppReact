import React, { Component } from "react";
import styles from "./styles";
import {View,Text} from "react-native";
import {Icon} from "native-base"

class Benifit extends Component{
    constructor(props){
        super(props);
      }

    render(){
        return(
            <View>
            {!this.props.icon &&(
            <View style={styles.benifitView}>
                <Text style={[styles.benifitText,this.props.selected==1?styles.selectedText:styles.notSelectedText]}>{this.props.first}</Text>
                <Text style={styles.benifitText}>|</Text>
                <Text style={[styles.benifitText,this.props.selected==2?styles.selectedText:styles.notSelectedText]}>{this.props.second}</Text>
                <Text style={styles.benifitText}>|</Text>
                <Text style={[styles.benifitText,this.props.selected==3?styles.selectedText:styles.notSelectedText]}>{this.props.third}</Text>
            </View>)}
            {this.props.icon &&(
            <View style={styles.benifitView}>
                <Icon style={[styles.benifitText,this.props.selected==1?styles.selectedText:styles.notSelectedText]} type="Entypo" name={this.props.first}/>
                <Text style={styles.benifitText}>|</Text>
                <Icon style={[styles.benifitText,this.props.selected==2?styles.selectedText:styles.notSelectedText]} type="Entypo" name={this.props.second}/>
                <Text style={styles.benifitText}>|</Text>
                <Icon style={[styles.benifitText,this.props.selected==3?styles.selectedText:styles.notSelectedText]} type="Entypo" name={this.props.third}/>
            </View>
            )}
            </View>

        )
    }
}
export default Benifit;

