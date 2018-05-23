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
     no:7 },
     {name:'The Escape',
     no:8 },
     {name:'The Escape',
     no:9 },
     {name:'The Escape',
     no:10 },
     {name:'The Escape',
     no:11 },
     {name:'The Escape',
     no:12 },
     {name:'The Escape',
     no:13 },
     {name:'The Escape',
     no:14 },
     {name:'The Escape',
     no:15 }
];
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

  renderScrollViewContent(){

  }
  render() {
    
   
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
                <View style={styles.episodeView}>
                
                <View style={styles.episodeWatched}/>
                
                <View style={styles.episodeDetailView}>
                <View style={styles.episodeNameView}>
                    <Text style={styles.episodeTitle}>{'    '+ep.name}</Text><Text>{'  '}S01E{ep.no}</Text>
                </View>
                <View style={styles.episodeNameView}>
                    <Text>{'    '}</Text><Icon name="ios-time-outline" style={styles.episodeIcon}/><Text>{'  '}49:56{'          '}</Text>
                    <Icon name="ios-closed-captioning" style={styles.episodeIcon}/><Text>{'  '}vost-english</Text>
                </View>
                </View>

                <View style={styles.episodeMore}><Icon name="md-more"/></View>
    
                </View>
              </ListItem>
            }/>
        </ScrollView>
      </Container>
    );
  }
}
