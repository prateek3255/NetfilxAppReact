import React, { Component } from "react";
import {
  Container,
  Content,
  Button,
  Header,
  Left,
  Body,
  Title,
  Icon,
  List,
  ListItem,
  Switch,
  Separator,
  Right
} from "native-base";
import { Image, View, TouchableHighlight, Text } from "react-native";
import styles from "./styles";

class Account extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Header androidStatusBarColor="#121212" style={styles.header}>
          <Left>
            <Image
              style={styles.image}
              source={require("../../../assets/netflixHeader.png")}
            />
          </Left>
          <Right>
          <TouchableHighlight onPress={()=>this.props.navigation.navigate("Users")}>
            <Image
              style={styles.accountImage}
              source={require("../../../assets/profile.jpg")}
            />
            </TouchableHighlight>
          </Right>
        </Header>
        <Content style={styles.content} >
       
          <Text style={styles.viewTitle}>Account</Text>
          <View style={styles.mainView}>
            <View style={styles.innerView}>
              <List>
                <ListItem >
                  <View style={styles.accountFirst}>
                    <Text style={styles.accountTitle}>Membership and billing</Text>
                    <Text style={styles.accountEmail}>abc@xyz.com</Text>
                    <Text style={styles.accountPass}>Password : *******</Text>   
                  </View>
                </ListItem>
              </List>
            </View>
          </View>
       
        </Content>
      </Container>
    );
  }
}
export default Account;
