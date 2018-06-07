import React, { Component } from "react";
import { Container, Content, Button, Header, Left, Body, Title, Icon, List, ListItem, Radio, Separator, Right } from "native-base";
import { Image, View, TouchableWithoutFeedback, Text, Modal, Switch } from "react-native";
import styles from "./styles";


class Setting extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      notifications: false,
      download: false,
      wifi: false,
      downloadQuality: false,
      storage: false,
      cellular: false
    }
  }
  toggleNotificaiton = () => {
    this.setState({
      notifications: !this.state.notifications
    });
  }
  toggleDownload = () => {
    this.setState({
      download: !this.state.download
    });
  }
  toggleWifi = () => {
    this.setState({
      wifi: !this.state.wifi
    });
  }
  setDownloadVisible(visible) {
    this.setState({ downloadQuality: visible });
  }
  setStorageVisible(visible) {
    this.setState({ storage: visible });
  }
  setCellularVisible(visible) {
    this.setState({ cellular: visible });
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
          <Right />
        </Header>
        <Content style={styles.content}>
          <Separator style={styles.separator}>
            <Text style={styles.separatorText}>Video Playback</Text>
          </Separator>
          <ListItem last style={styles.listItem} icon onPress={() => { this.setCellularVisible(true) }}>
            <Left>
              <Icon type="MaterialIcons" name="network-cell" style={styles.listIcon} />
            </Left>
            <Body >
              <Text style={styles.listTitle}>Cellular data usage</Text>
              <Text style={styles.listSubTitle}>Automatic</Text>
            </Body>
          </ListItem>

          <Modal
            animationType="none"
            transparent={true}
            visible={this.state.cellular}
            onRequestClose={() => {
              this.props.navigation.goBack()
            }}
          >
            <View style={styles.modalBackground}>
              <View style={styles.modalView}>

                <Text style={styles.modalTitle}>Cellular Data Usage</Text>
                <List>
                  <ListItem last icon>
                    <Left>
                      <Radio selected={true} color="white" selectedColor="#C14748" />
                    </Left>
                    <Body >
                      <Text style={styles.modalListTitle}>Wifi only</Text>
                    </Body>
                  </ListItem>
                  <ListItem last icon>
                    <Left>
                      <Radio selected={false} color="white" selectedColor="#C14748" />
                    </Left>
                    <Body >
                      <Text style={styles.modalListTitle}>Save data</Text>
                    </Body>
                  </ListItem>
                </List>
                <Text style={styles.modalCancel} onPress={() => { this.setCellularVisible(false) }}>Cancel</Text>

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
            <Body style={styles.listBody}>
            <View style={styles.switchEmpty} >
              <Text style={styles.listTitle}>Allow Notification</Text>
              </View>
              <TouchableWithoutFeedback onPress={this.toggleNotificaiton}>
                <View style={[styles.switchView,this.state.notifications? styles.switchOn:styles.switchOff]}>
                  <View style={styles.switch} />
                </View>
              </TouchableWithoutFeedback>
            </Body>
            {/* <Right >
              <Switch
                value={this.state.notificaitons}
                onValueChange={this.toggleNotificaiton}
              />
            </Right> */}
          </ListItem>
          <Separator style={styles.separator}>
            <Text style={styles.separatorText}>Downloads</Text>
          </Separator>
          <ListItem last style={styles.biggerListItem} icon>
            <Left>
              <Icon name="md-download" style={styles.listIcon} />
            </Left>
            <Body style={[styles.biggerBody,styles.listBody]} >
              <View style={styles.switchEmpty}>
              <Text style={styles.listTitle}>Smart Download</Text>
              <Text style={styles.listSubTitle}>Completed episodes will be deleted and replaced with the next episodes only on wifi</Text>
              </View>
              <TouchableWithoutFeedback onPress={this.toggleDownload}>
                <View style={[styles.switchView,this.state.download? styles.switchOn:styles.switchOff]}>
                  <View style={styles.switch} />
                </View>
              </TouchableWithoutFeedback>
            </Body>
            {/* <Right >
              <Switch
                value={this.state.download}
                onValueChange={this.toggleDownload}
              />
            </Right> */}
          </ListItem>
          <ListItem last style={styles.listItem} icon>
            <Left>
              <Icon type="MaterialIcons" name="wifi" style={styles.listIcon} />
            </Left>
            <Body style={styles.listBody}>
            <View style={styles.switchEmpty} >
              <Text style={styles.listTitle}>Wi-Fi Only</Text>
              </View>
             
              <TouchableWithoutFeedback onPress={this.toggleWifi}>
                <View style={[styles.switchView,this.state.wifi? styles.switchOn:styles.switchOff]}>
                  <View style={styles.switch} />
                </View>
              </TouchableWithoutFeedback>
            </Body>

            {/* <Switch 
                value={this.state.wifi}
                 onValueChange={this.toggleWifi}
                 /> */}
          </ListItem>
          <ListItem last style={styles.listItem} icon onPress={() => { this.setDownloadVisible(true) }}>
            <Left>
              <Icon type="Foundation" name="monitor" style={styles.listIcon} />
            </Left>
            <Body >
              <Text style={styles.listTitle}>Download Video Quality</Text>
              <Text style={styles.listSubTitle}>Standard</Text>
            </Body>
          </ListItem>
          <ListItem last style={styles.listItem} icon onPress={() => { this.setStorageVisible(true) }}>
            <Left>
              <Icon type="MaterialIcons" name="storage" style={styles.listIcon} />
            </Left>
            <Body >
              <Text style={styles.listTitle}>Download Location</Text>
              <Text style={styles.listSubTitle}>Internal Storage</Text>
            </Body>
          </ListItem>

          <Modal
            animationType="none"
            transparent={true}
            visible={this.state.downloadQuality}
            onRequestClose={() => {
              this.props.navigation.goBack()
            }}
          >
            <View style={styles.modalBackground}>
              <View style={styles.modalView}>

                <Text style={styles.modalTitle}>Download Video Quality</Text>
                <List>
                  <ListItem last icon>
                    <Left>
                      <Radio selected={true} color="white" selectedColor="#C14748" />
                    </Left>
                    <Body >
                      <Text style={styles.modalListTitle}>Standard</Text>
                      <Text style={styles.modalListSubTitle}>Faster download. Less Storage</Text>
                    </Body>
                  </ListItem>
                  <ListItem last icon>
                    <Left>
                      <Radio selected={false} color="white" selectedColor="#C14748" />
                    </Left>
                    <Body >
                      <Text style={styles.modalListTitle}>High</Text>
                      <Text style={styles.modalListSubTitle}>More Storage</Text>
                    </Body>
                  </ListItem>
                </List>
                <Text style={styles.modalCancel} onPress={() => { this.setDownloadVisible(false) }}>Cancel</Text>

              </View>
            </View>
          </Modal>


          <Modal
            animationType="none"
            transparent={true}
            visible={this.state.storage}
            onRequestClose={() => {
              this.props.navigation.goBack()
            }}
          >
            <View style={styles.modalBackground}>
              <View style={styles.modalView}>

                <Text style={styles.modalTitle}>Download Location</Text>
                <List>
                  <ListItem last icon>
                    <Left>
                      <Radio selected={true} color="white" selectedColor="#C14748" />
                    </Left>
                    <Body >
                      <Text style={styles.modalListTitle}>Internal Storage</Text>
                      <Text style={styles.modalListSubTitle}>558 MB free</Text>
                    </Body>
                  </ListItem>
                  <ListItem last icon>
                    <Left>
                      <Radio selected={false} color="white" selectedColor="#C14748" />
                    </Left>
                    <Body >
                      <Text style={styles.modalListTitle}>SD Card</Text>
                      <Text style={styles.modalListSubTitle}>1 GB free</Text>
                    </Body>
                  </ListItem>
                </List>
                <Text style={styles.modalCancel} onPress={() => { this.setStorageVisible(false) }}>Cancel</Text>

              </View>
            </View>
          </Modal>





          <Separator style={styles.separator}>
            <Text style={styles.separatorText}>About</Text>
          </Separator>
          <ListItem last style={styles.listItem} icon>
            <Left>
              <Icon type="FontAwesome" name="mobile-phone" style={styles.listIcon} />
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
