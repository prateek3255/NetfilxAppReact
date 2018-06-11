import React, { Component } from "react";
import { Container,Content,Button,Header,Left, Body,Title,Icon, List, ListItem, Switch, Separator, Right } from "native-base";
import {Image,View,TouchableWithoutFeedback,Text} from "react-native";
import styles from "./styles";

class Help extends Component {
  static navigationOptions={
    header:null
  }

  constructor(props){
    super(props);
  }
  render() {
    return (
        <Container>
        <View style={styles.headerView}>
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
            source={require("../../../assets/netflixHeader.png")}/>
        </View>
        <Content style={styles.content}>
           <View style={styles.firstView}><Text style={styles.firstText}>Find Help Online</Text></View>
            <List style={styles.list}>
            <ListItem icon>
            <Left>
                <Icon name="ios-exit-outline"  style={styles.blue}/>
              </Left>
              <Body>
                <Text style={styles.blue}>Help Center</Text>
              </Body>
            </ListItem>
            <ListItem icon>
            <Left>
                <Icon name="ios-card"  style={styles.blue}/>
              </Left>
              <Body>
                <Text style={styles.blue}>Update Payment Method</Text>
              </Body>
            </ListItem>
            <ListItem icon>
            <Left>
                <Icon name="printer" type="MaterialCommunityIcons" style={styles.blue}/>
              </Left>
              <Body>
                <Text style={styles.blue}>Request a Titler</Text>
              </Body>
            </ListItem>
            <ListItem icon>
            <Left>
                <Icon name="lock" type="MaterialIcons"  style={styles.blue}/>
              </Left>
              <Body>
                <Text style={styles.blue}>Update Password</Text>
              </Body>
            </ListItem>
            <ListItem icon>
            <Left>
                <Icon name="cancel" type="MaterialCommunityIcons"  style={styles.blue}/>
              </Left>
              <Body>
                <Text style={styles.blue}>Cancel Account</Text>
              </Body>
            </ListItem>
            <ListItem icon>
            <Left>
                <Icon name="tools" type="Entypo"  style={styles.blue}/>
              </Left>
              <Body>
                <Text style={styles.blue}>Fix a connection issue</Text>
              </Body>
            </ListItem>
            </List>

            <View style={styles.lastView}>
                <Text style={styles.firstText}>Contact</Text>
                <Text style={styles.firstText}>Teleflix Customer Service</Text>
                <Text style={styles.smallText}>We'll connect the call for free using your internet connection.</Text>
                <View><Button iconLeft dark>
                <Icon name='ios-call' />
                <Text style={styles.buttonText}>Call</Text>
                 </Button></View>
            </View>
        
        </Content>
      </Container>
    );
  }
}
export default Help;
