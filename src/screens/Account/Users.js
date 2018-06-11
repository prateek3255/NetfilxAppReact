import React, { Component } from "react";
import { Container,Content,Button,Header,Left, Body,Title,Icon, Card, CardItem, Switch, Separator, Right } from "native-base";
import {Image,View,TouchableWithoutFeedback,Text} from "react-native";
import styles from "./styles";

class Users extends Component {
  static navigationOptions={
    header:null
  }

  constructor(props){
    super(props);
  }
  render() {
    return (
        <Container>
        <Header androidStatusBarColor="#121212" style={styles.header}>
          <Left>
          <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon
                  name="arrow-back"
                  style={styles.back}
                />
              </Button>
          </Left>
         
          <Body>
          <Image
              style={styles.image}
              resizeMode={'contain'}
              source={require("../../../assets/netflixHeader.png")}
            />
          </Body>
          <Right>
          <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon
                  type="MaterialCommunityIcons"  
                  name="lead-pencil"
                  style={styles.back}
                />
              </Button>
          </Right>
        </Header>
        <Content style={styles.userContent}>
            <View style={styles.watching}>
            <Text style={styles.watchingText}> Who's Watching ?</Text>
            </View>    
            
            <View style={styles.boxes}>
                <View style={styles.card}>
                    <Image
                    style={styles.cardImage}
                    source={require("../../../assets/profile.png")}/>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
                    <Text style={{color:'white'}}>Yogesh</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <Image
                    style={styles.cardImage}
                    source={require("../../../assets/profile.png")}/>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
                    <Text style={{color:'white'}}>Yogesh</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <Image
                    style={styles.cardImage}
                    source={require("../../../assets/profile.png")}/>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
                    <Text style={{color:'white'}}>Yogesh</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <Image
                    style={styles.cardImage}
                    source={require("../../../assets/profile.png")}/>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
                    <Text style={{color:'white'}}>Yogesh</Text>
                    </View>
                </View>
            
            </View>
        
        </Content>
      </Container>
    );
  }
}
export default Users;
