import React, { Component } from "react";
import { Container,Content,Button,Header,Left, Right,Icon } from "native-base";
import {Image,View,TouchableHighlight,Text,LinearGradient} from "react-native";
import styles from "./styles";


class Register extends Component {
  static navigationOptions={
    header:null
  }

  constructor(props){
    super(props);
  }
  render() {
    return (
        <Container>
        <Header androidStatusBarColor="white" style={styles.header}>
          <Left>
          <Image
            style={styles.image} 
            source={require("../../../assets/netflixHeader.png")}/>
          </Left>
         
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate("Login")}>
              <Text style={styles.headerText}>LOG IN</Text>
            </Button>
            <Button transparent onPress={() => this.props.navigation.navigate("Help")}>
              <Text style={styles.headerText}>HELP</Text>
            </Button>
          </Right>
        </Header>
        <Content style={styles.registerContent}>
            <Image style={styles.contentImage} source={require("../../../assets/RegisterBackground.png")}/>
            <View style={styles.textView}>
                <Text style={styles.firstText}>See what's next</Text>
                <Text style={styles.secondText}>Watch anywhere. Cancel at Any Time</Text>
                <View>
                    <Button style={styles.button}>
                        <Text style={styles.buttonText}>Join Free For A Month</Text>
                    </Button>
                </View>
                <View style={styles.tabs}>
                <View style={styles.selectedIcon}><Icon name="ios-exit" style={styles.icons}/></View>
                <Icon name="ios-tablet-landscape-outline" style={styles.icons}/>
                <Icon name="ios-pricetags-outline" style={styles.icons}/>
            
                </View>
                <View style={styles.thirdTextView}>
                    <Text style={styles.firstText}>
                        If you decide netflix isn't for you no problem. No commitment. Cancel anytime.
                    </Text>
                </View>
                <Image
                style={styles.cancelImage}
                source={require("../../../assets/cancel.png")}/>
            </View>
            
                
         
        </Content>
      </Container>
    );
  }
}
export default Register;
