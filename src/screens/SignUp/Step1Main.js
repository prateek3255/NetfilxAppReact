import React, { Component } from "react";
import { Container,Content,Button, Right,Icon } from "native-base";
import {Image,View,TouchableWithoutFeedback,Text,} from "react-native";
import styles from "./styles";
import WhiteHeader from "../Headers/WhiteHeader";

class Step1Main extends Component {
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
           <View style={styles.mainView}>
            <Icon name="check-circle-outline" type="MaterialCommunityIcons" style={styles.tick}/>
            <View style={styles.mainEmpty}/>
            <Text>Step 1 of 3</Text>
            <Text style={styles.mainBold}>Choose Your plan</Text>
            <View style={styles.mainEmpty}/>
            <Text>Choose from any of our three plans, and you will not be charged until after your free month ends</Text>
            <View style={styles.mainEmpty}/>
            <Button style={styles.mainButton} onPress={()=>this.props.navigation.navigate("Step1Content")}>
                <Text style={styles.mainButtonText}>See the Plans</Text>
            </Button>
           </View>
         
        </Content>
      </Container>
    );
  }
}
export default Step1Main;
