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
import {View, StatusBar} from "react-native";
import BasicTab from "./screens/tab/basicTab";
import TabOne from "./screens/tab/tabOne";
import TabTwo from "./screens/tab/tabTwo";
import Detail from "./screens/tab/detailScreen";
import Episodes from "./screens/tab/episodes";
import VideoPlayer from "./screens/tab/video";
import SideBar from "./screens/sidebar";



const TabHome = TabNavigator({
  Series:{screen:TabOne,navigationOptions: {  tabBarLabel: 'Series'  }},
  Movies:{screen:TabTwo,navigationOptions: {  tabBarLabel: 'Movies'  }}
},
{
  swipeEnabled:true,
  navigationOptions:({navigation})=> ({
    title:'Netflix',
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
      <Button transparent>
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
    TabHome: { screen: TabHome},
    Detail: {screen: Detail},
    Episodes: {screen:Episodes},
    VideoPlayer: {screen:VideoPlayer},
    },
  {
    initialRouteName: "Drawer",
    // headerMode: "none"
  }
);

export default () =>
  <Root>
  <StatusBar backgroundColor='#2B2C30' barStyle='light-content' />
    <AppNavigator />
  </Root>;
