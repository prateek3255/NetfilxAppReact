import React, { Component } from "react";
import { Container,Content,Button,Header,Left, Right,Icon, Form, Item, Input, Label } from "native-base";
import {Image,View,TouchableWithoutFeedback,Text} from "react-native";
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
        <Header androidStatusBarColor="#121212" style={styles.headerLogin}>
          <Left>
          <View style={styles.headerArrangement}>
          <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon
                  name="arrow-back"
                  style={styles.back}
                />
              </Button>
              <View style={styles.empty}/>
          <Image
            style={styles.image} 
            resizeMode={'contain'}
            source={require("../../../assets/netflixHeader.png")}/>
            </View>
          </Left>
         
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate("Help")}>
              <Text style={styles.loginHeaderText}>HELP</Text>
            </Button>
          </Right>
        </Header>
        <Content style={styles.content}>
              <View style={styles.login}>  
             <Text style={styles.firstText}>Sign in</Text>
             <Form>
            <Item floatingLabel last>
              <Label style={styles.inputLabel} >Username</Label>
              <Input style={styles.input} keyboardType="email-address"/>
            </Item>
            <Item floatingLabel last>
              <Label style={styles.inputLabel}>Password</Label>
              <Input style={styles.input} secureTextEntry/>
            </Item>
            </Form>
            <Button style={styles.loginButton} onPress={() => this.props.navigation.navigate("TabHome")}>
                <Text style={styles.firstText}>Sign in</Text>
            </Button>
            <Text style={styles.loginBottomText}>Forgot your email or password?</Text>
            <Text style={styles.loginBottomText} onPress={() => this.props.navigation.navigate("Register")}>New to Teleflix? Sign up now.</Text>
             </View>
        </Content>
      </Container>
    );
  }
}
export default Login;
