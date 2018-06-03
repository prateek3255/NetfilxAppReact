import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Header
} from "native-base";
import styles from "./style";

const drawerCover = require("../../../assets/netflix.png");
const drawerImage = require("../../../assets/logo-kitchen-sink.png");
const sidebars = [
  {
    name: "Account",
    route: "Account",
    icon: "md-person",
  },
  {
    name: "My List",
    route: "MyList",
    icon: "md-basket",
  },
  {
    name: "Notifications",
    route: "Notification",
    icon: "md-notifications",
  },
  {
    name: "My Downloads",
    route: "Download",
    icon: "md-download",
  },
  {
    name: "Settings",
    route: "Setting",
    icon: "md-settings",
  },
  {
    name: "Logout",
    route: "Logout",
    icon: "md-power",
  },
];

class SideBar extends Component {
  static navigationOptions = {
    drawerLabel: () => null,
    header:false
    }

  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>    
      <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />

          <List
            dataArray={sidebars}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
