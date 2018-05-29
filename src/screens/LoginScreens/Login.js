import React, { Component } from "react";
import { Container,Content,Button,Header,Left, Right,Icon, Form, Item, Input, Label } from "native-base";
import {Image,View,TouchableHighlight,Text,LinearGradient} from "react-native";
import styles from "./styles";


class Login extends Component {
  static navigationOptions={
    header:null
  }

  constructor(props){
    super(props);
  }
  render() {
    return (
        <Container>
        <Header androidStatusBarColor="black" style={styles.headerLogin}>
          <Left>
          <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
          <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon
                  name="arrow-back"
                  style={{ color: "white", fontSize: 19 }}
                />
              </Button>
              
          <Image
            style={styles.image} 
            source={require("../../../assets/netflixHeader.png")}/>
            </View>
          </Left>
         
          <Right>
            <Button transparent>
              <Text style={styles.loginHeaderText}>HELP</Text>
            </Button>
          </Right>
        </Header>
        <Content style={styles.content}>
              <View style={styles.login}>  
             <Text style={styles.firstText}>Sign in</Text>
             <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>   
             </View>
        </Content>
      </Container>
    );
  }
}
export default Login;
