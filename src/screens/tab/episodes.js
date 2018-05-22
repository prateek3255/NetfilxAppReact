import React, { Component } from "react";
import {
  Button,
  Icon,
  Container,
  Header,
  Left,
  Right,
  List,
  ListItem
} from "native-base";
import { ImageBackground, View, Text, ScrollView } from "react-native";
import styles from "./styles";

// const items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];
export default class Episodes extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.arr = [
      require("../../../assets/breaking.jpg"),
      require("../../../assets/narcos.jpg"),
      require("../../../assets/stranger.jpg"),
      require("../../../assets/thrones.jpg")
    ];
  }
  render() {
    const eps = [
        {name:'Breaking 1',
         no:1   },
         {name:'Breaking 1',
         no:2   },
         {name:'Green Light',
         no:3   },
         {name:'BLue Light',
         no:4   },
         {name:'The Fly',
         no:5   },
         {name:'The Escape',
         no:6 }
    ];
   
    return (
      <Container style={{ flex: 1, flexDirection: "column" }}>
        <ImageBackground
          style={styles.detailImage}
          source={this.arr[this.props.navigation.state.params.image]}
        >
          <Header style={{ backgroundColor: "transparent" }}>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Right>
              <Button transparent>
                <Icon name="search" />
              </Button>
              <Button transparent>
                <Icon name="md-more" />
              </Button>
            </Right>
          </Header>
          <View style={styles.buttonAlign}>
            <Button rounded style={styles.button}>
              <Icon style={styles.play} name="play" />
            </Button>
          </View>
        </ImageBackground>
        <View style={styles.trailer}>
          <Text style={styles.trailerText}>GreenLight S01 | E03</Text>
        </View>
        <ScrollView>
        <List dataArray={eps}
            renderRow={(ep) =>
              <ListItem>
                <View style={{flex:1,flexDirection:'row',height:40}}>
                
                <View style={{flex:0.01,height:40,backgroundColor:'orange'}}/>
                
                <View style={{flex:0.9}}>
                <View style={{flex:0.5,flexDirection:'row',alignItems:'center'}}>
                    <Text style={{fontSize:15,fontWeight:'bold'}}>{'    '+ep.name}</Text><Text>{'  '}S01E{ep.no}</Text>
                </View>
                <View style={{flex:0.5,flexDirection:'row',alignItems:'center'}}>
                    <Text>{'    '}</Text><Icon name="ios-time-outline" style={{fontSize:15}}/><Text>{'  '}49:56{'          '}</Text>
                    <Icon name="ios-closed-captioning" style={{fontSize:15}}/><Text>{'  '}vost-english</Text>
                </View>
                </View>

                <View style={{flex:0.05}}><Icon name="md-more"/></View>
    
                </View>
              </ListItem>
            }/>
        </ScrollView>
      </Container>
    );
  }
}
