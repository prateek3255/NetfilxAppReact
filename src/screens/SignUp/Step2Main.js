import React, { Component } from "react";
import { Container,Content,Button, Right,Icon } from "native-base";
import {Image,View,TouchableWithoutFeedback,Text,} from "react-native";
import styles from "./styles";
import WhiteHeader from "../Headers/WhiteHeader";

class Step2Main extends Component {
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
            <Icon name="cellphone-iphone" type="MaterialCommunityIcons" style={styles.tick}/>
            <View style={styles.mainEmpty}/>
            <Text>Step 2 of 3</Text>
            <Text style={styles.mainBold}>Create your account</Text>
            <View style={styles.mainEmpty}/>
            <Text>Use your email and create a password to watch teleflix on any device at any time.</Text>
            <View style={styles.mainEmpty}/>
            <Button style={styles.mainButton} onPress={()=>this.props.navigation.navigate("Step2Content",{plan:this.props.navigation.state.params.plan})}>
                <Text style={styles.mainButtonText}>Continue</Text>
            </Button>
           </View>
         
        </Content>
      </Container>
    );
  }
}
export default Step2Main;
