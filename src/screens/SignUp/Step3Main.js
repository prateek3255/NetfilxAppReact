import React, { Component } from "react";
import { Container,Content,Button, Right,Icon } from "native-base";
import {Image,View,TouchableWithoutFeedback,Text,} from "react-native";
import styles from "./styles";
import WhiteHeader from "../Headers/WhiteHeader";

class Step3Main extends Component {
  static navigationOptions={
    header:null
  }

  constructor(props){
    super(props);
  }
  render() {
    return (
        <Container>

        <WhiteHeader login={()=>this.props.navigation.navigate("Login")} help={()=>this.props.navigation.navigate("Help")}/>


        <Content contentContainerStyle={styles.mainContent}>
           <View style={styles.main3View}>
            <Icon name="lock-outline" type="MaterialCommunityIcons" style={styles.tick}/>
            <View style={styles.mainEmpty}/>
            <Text>Step 3 of 3</Text>
            <Text style={styles.mainBold}>Set up your Payment</Text>
            <View style={styles.mainEmpty}/>
            <Text >Cancel before 07/07/18 if you dont want to be charged.</Text>
            <View style={styles.contentEmpty}/>
            <Text >As a reminder we will remind you 3 days before. </Text>
            <View style={styles.contentEmpty}/>
            <Text >No Commitments. Cancel online at any time.</Text>
            <View style={styles.mainEmpty}/>
            <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate("Step3Content",{uid:this.props.navigation.state.params.uid,plan:this.props.navigation.state.params.plan})}>
            <View style={styles.main3Button}>
            <Text>Credit or Debit Card</Text>
            <Icon name="navigate-next" type="MaterialIcons"/>
            </View>
            </TouchableWithoutFeedback>
           </View>
         
        </Content>
      </Container>
    );
  }
}
export default Step3Main;
