import React, { Component } from "react";
import {
  Container,
  Content,
  Button,
  Header,
  Left,
  Body,
  Title,
  Item,
  Input,
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
              source={require("../../../assets/profile.png")}
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
                <ListItem>
                  <View style={styles.normalItems}>
                    <Text style={styles.normalText}>Check Email</Text>
                    <Icon name="navigate-next" type="MaterialIcons" style={styles.normalIcon}/>
                  </View>
                </ListItem>
                <ListItem>
                  <View style={styles.normalItems}>
                    <Text style={styles.normalText}>Change Password</Text>
                    <Icon name="navigate-next" type="MaterialIcons" style={styles.normalIcon}/>
                  </View>
                </ListItem>
                <ListItem>
                  <View style={styles.normalItems}>
                    <Text style={styles.normalText}>Add phone number</Text>
                    <Icon name="navigate-next" type="MaterialIcons" style={styles.normalIcon}/>
                  </View>
                </ListItem>
                <ListItem>
                  <View style={styles.cardDetailItem}>
                    <Icon name="cc-mastercard" type="FontAwesome" />
                    <Text style={styles.normalText}>{'  '}****{' '}****{' '}****{' '}2345</Text>
                  </View>
                </ListItem>
                <ListItem>
                  <View style={styles.normalItems}>
                    <Text style={styles.normalText}>Update payment info</Text>
                    <Icon name="navigate-next" type="MaterialIcons" style={styles.normalIcon}/>
                  </View>
                </ListItem>
                <ListItem>
                  <View style={styles.normalItems}>
                    <Text style={styles.normalText}>Billing Details</Text>
                    <Icon name="navigate-next" type="MaterialIcons" style={styles.normalIcon}/>
                  </View>
                </ListItem>
                <ListItem>
                  <View style={styles.buttonItems}>
                    <Text style={styles.buttonItemText}>Redeem gift card or promo code</Text>
                    <Item regular>
                      <Input placeholder='Enter code or pin' />
                    </Item>
                    <Button block light >
                      <Text>Redeem</Text>
                    </Button>
                  </View>
                </ListItem>
                <ListItem last style={styles.biggerItem2}>
                  <View style={styles.buttonItems}>
                    <View style={styles.normalItems2}>
                    <Text style={styles.normalText}>Where to buy gift cards</Text>
                    <Icon name="navigate-next" type="MaterialIcons" style={styles.normalIcon}/>
                  </View>
                  <View style={styles.button}>
                    <Button block light >
                      <Text>Cancel Membership</Text>
                    </Button>
                    </View>
                  </View>
                </ListItem>
              </List>
            </View>
          </View>


          <View style={styles.mainView}>
            <View style={styles.innerView}>
              <List>
                <ListItem >
                  <View style={styles.headingFirst}>
                    <View style={styles.headingTitle}><Text style={styles.accountTitle}>Plan Details</Text></View>
                    <View style={styles.cardDetailItem}>
                    <Text style={styles.normalText}>Standard{'      '}</Text>
                    <Icon name="hd" type="MaterialIcons" />
                  </View>
                  </View>
                </ListItem>
                <ListItem last>
                  <View style={styles.normalItems}>
                    <Text style={styles.normalText}>Check Plan</Text>
                    <Icon name="navigate-next" type="MaterialIcons" style={styles.normalIcon}/>
                  </View>
                </ListItem>
              </List>
            </View>
          </View>
       
          <View style={styles.mainView}>
            <View style={styles.innerView}>
              <List>
                <ListItem >
                  
                  <Text style={styles.accountTitle}>Settings</Text>
                    
                </ListItem>
                <ListItem >
                  <View style={styles.normalItems}>
                    <Text style={styles.normalText}>Communication Settings</Text>
                    <Icon name="navigate-next" type="MaterialIcons" style={styles.normalIcon}/>
                  </View>
                </ListItem>
                <ListItem >
                  <View style={styles.normalItems}>
                    <Text style={styles.normalText}>Parental Controls</Text>
                    <Icon name="navigate-next" type="MaterialIcons" style={styles.normalIcon}/>
                  </View>
                </ListItem>
                <ListItem >
                  <View style={styles.normalItems}>
                    <Text style={styles.normalText}>Test Participation</Text>
                    <Icon name="navigate-next" type="MaterialIcons" style={styles.normalIcon}/>
                  </View>
                </ListItem>
                <ListItem >
                  <View style={styles.normalItems}>
                    <Text style={styles.normalText}>Manage Download Devices</Text>
                    <Icon name="navigate-next" type="MaterialIcons" style={styles.normalIcon}/>
                  </View>
                </ListItem>
                <ListItem >
                  <View style={styles.normalItems}>
                    <Text style={styles.normalText}>Activate a device</Text>
                    <Icon name="navigate-next" type="MaterialIcons" style={styles.normalIcon}/>
                  </View>
                </ListItem>
                <ListItem >
                  <View style={styles.normalItems}>
                    <Text style={styles.normalText}>Recent streaming activity</Text>
                    <Icon name="navigate-next" type="MaterialIcons" style={styles.normalIcon}/>
                  </View>
                </ListItem>
                <ListItem last>
                  <View style={styles.normalItems}>
                    <Text style={styles.normalText}>Sign out of all devices</Text>
                    <Icon name="navigate-next" type="MaterialIcons" style={styles.normalIcon}/>
                  </View>
                </ListItem>
              </List>
            </View>
          </View>


          <View style={styles.mainView}>
            <View style={styles.innerView}>
              <List>
                <ListItem >
                  <View style={styles.headingFirst}>
                    <View style={styles.headingTitle}><Text style={styles.accountTitle}>My Profile</Text></View>
                    <View style={styles.cardDetailItem}>
                    <Image
                      style={styles.profileImage}
                      source={require("../../../assets/profile.png")}
                    />
                    <Text style={styles.normalText}>{'   '}XYZ</Text>
                  </View>
                  </View>
                </ListItem>
                <ListItem >
                  <View style={styles.normalItems}>
                    <Text style={styles.normalText}>Language</Text>
                    <Icon name="navigate-next" type="MaterialIcons" style={styles.normalIcon}/>
                  </View>
                </ListItem>
                <ListItem >
                  <View style={styles.normalItems}>
                    <Text style={styles.normalText}>Playback Settings</Text>
                    <Icon name="navigate-next" type="MaterialIcons" style={styles.normalIcon}/>
                  </View>
                </ListItem>
                <ListItem >
                  <View style={styles.normalItems}>
                    <Text style={styles.normalText}>Subtitle Appearance</Text>
                    <Icon name="navigate-next" type="MaterialIcons" style={styles.normalIcon}/>
                  </View>
                </ListItem>
                <ListItem >
                  <View style={styles.normalItems}>
                    <Text style={styles.normalText}>Viewing Acivity</Text>
                    <Icon name="navigate-next" type="MaterialIcons" style={styles.normalIcon}/>
                  </View>
                </ListItem>
                <ListItem last>
                  <View style={styles.normalItems}>
                    <Text style={styles.normalText}>Ratings</Text>
                    <Icon name="navigate-next" type="MaterialIcons" style={styles.normalIcon}/>
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
