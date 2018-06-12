import React, { Component } from "react";
import { Container,Content,Button, Right,Icon, Input,Form,Item,Label } from "native-base";
import {Image,View,TouchableWithoutFeedback,Text} from "react-native";
import styles from "./styles";
import WhiteHeader from "../Headers/WhiteHeader";
import Benifit from "./Benifit";

class Step2Content extends Component {
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


        <Content contentContainerStyle={styles.cont2Content}>
           <View style={styles.content2View}>
           <Text>Step 2 of 3</Text>
           <View style={styles.contentEmpty}/>
           <Text style={styles.mainBold}>Sign up to start your free month.</Text>
           <View style={styles.contentEmpty}/>
           <Text>Just two more steps and you are finished!</Text>
           <Text>We hate paperwork, too.</Text>
           <View style={styles.contentEmpty}/>
           <Text style={styles.bold}>Create your account</Text>
           <View style={styles.contentEmpty}/>
           <Form>
            <Item regular>
            <Input placeholder="Email" keyboardType="email-address"/>
            </Item>
            <Item regular>
            <Input placeholder="Password" secureTextEntry />
            </Item>
            </Form>
            <View style={styles.contentEmpty}/>
            <Button style={styles.contentButton} onPress={()=>this.props.navigation.navigate("Step3Main")}>
                <Text style={styles.mainButtonText}>Continue</Text>
            </Button>
           </View>
           
         
        </Content>
      </Container>
    );
  }
}
export default Step2Content;
