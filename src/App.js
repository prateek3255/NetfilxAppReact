import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator,TabNavigator } from "react-navigation";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Tabs,
  Tab,
  Right,
  Left,
  Body
} from "native-base";
// import BasicTab from "./screens/tab/basicTab";
import TabOne from "./screens/tab/tabOne";
import TabTwo from "./screens/tab/tabTwo";
import Detail from "./screens/tab/detailScreen";
import SideBar from "./screens/sidebar";



const TabHome = TabNavigator({
  Series:{screen:TabOne},
  Movies:{screen:TabTwo}
},
{
  swipeEnabled:true,
  
}
);

const Drawer = DrawerNavigator(
  {
    NHTab: { screen: TabHome }

  },
  {
    initialRouteName: "NHTab",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);
const AppNavigator = StackNavigator(
  {
    Drawer: { screen: Drawer },
    TabHome: { screen: TabHome },
    Detail: {screen: Detail}
    },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
