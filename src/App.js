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
  Body,
} from "native-base";
import {View, StatusBar, YellowBox} from "react-native";
import BasicTab from "./screens/tab/basicTab";
import TabOne from "./screens/tab/tabOne";
import TabTwo from "./screens/tab/tabTwo";
import Detail from "./screens/tab/detailScreen";
import Episodes from "./screens/tab/episodes";
import VideoPlayer from "./screens/tab/video";
import SideBar from "./screens/sidebar";
import Register from "./screens/LoginScreens/Register";
import Login from "./screens/LoginScreens/Login";
import Setting from "./screens/Settings/setting";
import Notification from "./screens/Notifications/Notification";
import MyList from "./screens/MyList/MyList";
import Account from "./screens/Account/Account";
import Users from "./screens/Account/Users";
import Search from "./screens/search/Search";
import Help from "./screens/Help/Help";
import Download from "./screens/Downloads/download";

YellowBox.ignoreWarnings(["Warning: isMounted( ... ) is deprecated"]);

const TabHome = TabNavigator({
  Series:{screen:TabOne,navigationOptions: {  tabBarLabel: 'Series'  }},
  Movies:{screen:TabTwo,navigationOptions: {  tabBarLabel: 'Movies'  }}
},
{
  swipeEnabled:true,
  navigationOptions:({navigation})=> ({
    title:'Teleflix',
    headerLeft:(
      <View style={{flex:1,flexDirection:'row'}}>
      <Button
              transparent
              onPress={() => navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" style={{color:'white'}}/>
            </Button>
          </View>
    ),
    headerRight:(
      <View style={{flex:1,flexDirection:'row'}}>
      <Button  transparent onPress={() => navigation.navigate("Search")}>
              <Icon name="search" style={{color:'white'}}/>
            </Button>
            <Button transparent>
              <Icon name="md-more" style={{color:'white'}}/>
            </Button>
            </View>      
    ),
    headerStyle:{
      backgroundColor:'#2B2C30'
    },
    headerTitleStyle: {
      color: '#C14748',
    },
  }),
  tabBarOptions: {
      style:{
        backgroundColor:'#2B2C30'
      }
      
    }
  

}
);


const AppNavigator = StackNavigator(
  {
    // Drawer: { screen: Drawer },
    Register:{screen:Register, navigationOptions:({navigation})=>({
      drawerLockMode:"locked-closed"
    })},
    Login:{screen:Login, navigationOptions:({navigation})=>({
      drawerLockMode:"locked-closed"
    })},
    Help:{screen:Help},
    TabHome: { screen: TabHome},
    Search: {screen: Search},
    MyList:{screen:MyList},
    Account:{screen:Account},
    Users:{screen:Users},
    Notification: {screen: Notification},
    Download:{screen:Download},
    Detail: {screen: Detail},
    Episodes: {screen:Episodes},
    VideoPlayer: {screen:VideoPlayer, navigationOptions:({navigation})=>({
      drawerLockMode:"locked-closed"
    })},
    

    },
  {
    initialRouteName: "Register",
    // headerMode: "none"
  }
);
const Drawer = DrawerNavigator(
  {
    App: { screen: AppNavigator },
    Setting: {screen: Setting},
    Notification: {screen: Notification},
    MyList:{screen:MyList},
    Account:{screen:Account},
    Download:{screen:Download}
    

  },
  {
    initialRouteName: "App",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default () =>
  <Root>
  <StatusBar backgroundColor='#2B2C30' barStyle='light-content' />
    <Drawer />
  </Root>;
