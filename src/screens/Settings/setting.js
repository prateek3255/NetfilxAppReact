import React, { Component } from "react";
import { Container,Content,Button,Header,Left, Body,Title,Icon, List, ListItem, Radio, Switch, Separator, Right } from "native-base";
import {Image,View,TouchableHighlight,Text,Modal} from "react-native";
import styles from "./styles";


class Setting extends Component {
  static navigationOptions={
    header:null
  }

  constructor(props){
    super(props);
    this.state = {
      notifications:false,
      download:false,
      wifi:false,
      cellular:false,
      storage:false
    }
  }
  toggleNotificaiton=()=>{
    this.setState({
      notificaitons:!this.state.notificaitons
    });
  }
  toggleDownload=()=>{
    this.setState({
      download:!this.state.download
    });
  }
  toggleWifi=()=>{
    this.setState({
      wifi:!this.state.wifi
    });
  }
  setCellularVisible(visible) {
    this.setState({cellular: visible});
  }
  setStorageVisible(visible) {
    this.setState({storage: visible});
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
            <Title style={styles.headerTitle}>App Settings</Title>
          </Body>
        </Header>
        <Content style={styles.content}>
        <Separator style={styles.separator}>
            <Text style={styles.separatorText}>Video Playback</Text>
          </Separator>
          <ListItem last style={styles.listItem} icon onPress={()=>{this.setCellularVisible(true)}}>
              <Left>
                <Icon type="MaterialIcons" name="network-cell" style={styles.listIcon} />
              </Left>
              <Body >
                <Text style={styles.listTitle}>Cellular data usage</Text>
                <Text style={styles.listSubTitle}>Automatic</Text>
              </Body>
          </ListItem>

          <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.cellular}
          onRequestClose={()=>{
            this.props.navigation.goBack()
          }}
         >
          <View style={styles.modalView}>
            <View style={styles.innerModalView}>
              <Text style={styles.listTitle}>Download Video Quality</Text>
              <List>
                <ListItem last icon>
                <Left>
                    <Radio selected={true} />
                  </Left>
                  <Body >
                    <Text style={styles.listTitle}>Standard</Text>
                    <Text style={styles.listSubTitle}>Faster downlaod and less storage</Text>
                  </Body>
                </ListItem>
                <ListItem last icon>
                <Left>
                    <Radio selected={false} />
                  </Left>
                  <Body >
                    <Text style={styles.listTitle}>High</Text>
                    <Text style={styles.listSubTitle}>Uses More Storage</Text>
                  </Body>
                </ListItem>
              </List>
              <Text style={styles.modalCancel} onPress={()=>{this.setCellularVisible(false)}}>Cancel</Text>
            </View>
          </View>
        </Modal>

          <Separator style={styles.separator}>
            <Text style={styles.separatorText}>Notifications</Text>
          </Separator>
          <ListItem last style={styles.listItem} icon>
              <Left>
                <Icon type="MaterialIcons" name="notifications" style={styles.listIcon} />
              </Left>
              <Body >
                <Text style={styles.listTitle}>Allow Notifications</Text>
              </Body>
              <Right >
                <Switch 
                value={this.state.notificaitons}
                 onValueChange={this.toggleNotificaiton}
                 onTintColor="#C14748"
                 thumbTintColor="white"
                 tintColor="black"/>
              </Right>
          </ListItem>
          <Separator style={styles.separator}>
            <Text style={styles.separatorText}>Downloads</Text>
          </Separator>
          <ListItem last style={styles.biggerListItem} icon>
              <Left>
                <Icon  name="md-download" style={styles.listIcon} />
              </Left>
              <Body style={styles.biggerBody}>
                <Text style={styles.listTitle}>Smart Download</Text>
                <Text style={styles.listSubTitle}>Completed episodes will be deleted and replaced with the next episodes only on wifi</Text>
              </Body>
              <Right >
              <Switch 
                value={this.state.download}
                 onValueChange={this.toggleDownload}
                 onTintColor="#C14748"
                 thumbTintColor="white"
                 tintColor="black"/>
              </Right>
          </ListItem>
          <ListItem last style={styles.listItem} icon>
              <Left>
                <Icon type="MaterialIcons"  name="wifi" style={styles.listIcon} />
              </Left>
              <Body >
                <Text style={styles.listTitle}>Wi-Fi Only</Text>
              </Body>
              <Right >
              <Switch 
                value={this.state.wifi}
                 onValueChange={this.toggleWifi}
                 onTintColor="#C14748"
                 thumbTintColor="white"
                 tintColor="black"/>
              </Right>
          </ListItem>
          <ListItem last style={styles.listItem} icon>
              <Left>
                <Icon  type="Foundation"  name="monitor" style={styles.listIcon} />
              </Left>
              <Body >
                <Text style={styles.listTitle}>Download Video Quality</Text>
                <Text style={styles.listSubTitle}>Standard</Text>
              </Body>
          </ListItem>
          <ListItem last style={styles.listItem} icon onPress={()=>{this.setStorageVisible(true)}}>
              <Left>
                <Icon  type="MaterialIcons"  name="storage" style={styles.listIcon} />
              </Left>
              <Body >
                <Text style={styles.listTitle}>Download Location</Text>
                <Text style={styles.listSubTitle}>Internal Storage</Text>
              </Body>
          </ListItem>



           <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.storage}
          onRequestClose={()=>{
            this.props.navigation.goBack()
          }}
         >
          <View style={styles.modalView}>
            <View style={styles.innerModalView}>
              <Text style={styles.listTitle}>Download Location</Text>
              <List>
                <ListItem last icon>
                <Left>
                    <Radio selected={true} />
                  </Left>
                  <Body >
                    <Text style={styles.listTitle}>Internal Storage</Text>
                    <Text style={styles.listSubTitle}>558 MB free</Text>
                  </Body>
                </ListItem>
                <ListItem last icon>
                <Left>
                    <Radio selected={false} />
                  </Left>
                  <Body >
                    <Text style={styles.listTitle}>SD Card</Text>
                    <Text style={styles.listSubTitle}>1 GB free</Text>
                  </Body>
                </ListItem>
              </List>
              <Text style={styles.modalCancel} onPress={()=>{this.setStorageVisible(false)}}>Cancel</Text>
            </View>
          </View>
        </Modal>





          <Separator style={styles.separator}>
            <Text style={styles.separatorText}>About</Text>
          </Separator>
          <ListItem last style={styles.listItem} icon>
              <Left>
                <Icon  type="FontAwesome"  name="mobile-phone" style={styles.listIcon} />
              </Left>
              <Body >
                <Text style={styles.listTitle}>Device</Text>
                <Text style={styles.listSubTitle}>Internal Storage</Text>
              </Body>
          </ListItem>
          <ListItem last style={styles.listItem} icon>
              <Left>
                <Icon name="ios-person" style={styles.listIcon} />
              </Left>
              <Body >
                <Text style={styles.listTitle}>User Account</Text>
                <Text style={styles.listSubTitle}>Email: abc@xyz.com</Text>
              </Body>
          </ListItem>
          <Separator style={styles.separator}>
            <Text style={styles.separatorText}>Diagnostics</Text>
          </Separator>
          <ListItem last style={styles.listItem} icon>
              <Left>
                <Icon name="ios-radio" style={styles.listIcon} />
              </Left>
              <Body >
                <Text style={styles.listTitle}>Check network</Text>
              </Body>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
export default Setting;
