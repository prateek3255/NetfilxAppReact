import React, { Component } from "react";
import { Container,Content,Button, Left,Icon, Input,Form,Item,ListItem,Body,CheckBox } from "native-base";
import {Image,View,TouchableWithoutFeedback,Text} from "react-native";
import styles from "./styles";
import WhiteHeader from "../Headers/WhiteHeader";
import Benifit from "./Benifit";

class Step3Content extends Component {
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
           <View style={styles.contentView}>
           <Text>Step 3 of 3</Text>
           <View style={styles.contentEmpty}/>
           <Text style={styles.mainBold}>Set up your credit or debit card.</Text>
           <View style={styles.contentEmpty}/>
           <View style={styles.creditCard}>
                <Icon name="cc-visa" type="FontAwesome"/>
                <Text>{'   '}</Text>
                <Icon name="cc-mastercard" type="FontAwesome"/>
           </View>
           <View style={styles.contentEmpty}/>
           <Form>
            <Item regular>
            <Input placeholder="First Name"/>
            </Item>
            <Item regular>
            <Input placeholder="Last Name"/>
            </Item>
            <Item regular>
            <Input placeholder="Card Number" keyboardType="phone-pad"/>
            </Item>
            <Item regular>
            <Input placeholder="Expiry Date (MM/YY)"/>
            </Item>
            <Item regular>
            <Input placeholder="Security code (CVV)" keyboardType="phone-pad"/>
            </Item>
            </Form>
            <View style={styles.contentEmpty}/>
            <Text>You will be charged Rs. 800 after your free month ends.</Text>
            <View style={styles.contentEmpty}/>
            <View style={styles.checkBox}>
            <CheckBox checked={true} />
              <Text>{'    '}I am over 18 and I agree to the terms of use and privacy policy.</Text>
              </View>
          <View style={styles.contentEmpty}/>
            <Button style={styles.mainButton} onPress={()=>this.props.navigation.navigate("Login")}>
                <Text style={styles.mainButtonText}>Start Membership</Text>
            </Button>
           </View>
           
         
        </Content>
      </Container>
    );
  }
}
export default Step3Content;
