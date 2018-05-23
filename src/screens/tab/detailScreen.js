import React, { Component } from "react";
import {
  Button,
  Icon,
  Container,
  Header,
  Left,
  Right,
  Card,
  CardItem
} from "native-base";
import { ImageBackground, View, Text, ScrollView,TouchableHighlight } from "react-native";
import styles from "./styles";

export default class DetailScreen extends Component {
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
          <Text style={styles.trailerText}>Watch Trailer Season 1</Text>
        </View>
        <View style={styles.ratings}>
          <View style={styles.rating}>
            <Icon name="ios-star" style={styles.background} />
            <Icon name="ios-star" style={styles.background} />
            <Icon name="ios-star" style={styles.background} />
            <Icon name="ios-star" style={styles.background} />
            <Icon name="ios-star" style={styles.background} />
          </View>
          <Text style={styles.rateText}>5.0/5</Text>
          <View style={styles.rate} />
          <View style={styles.comment}>
            <Icon name="md-chatbubbles" style={styles.background} />
            <Text style={styles.rateText}>279</Text>
          </View>
        </View>

        <View style={styles.show}>
          <View>
            <Text style={styles.showName}>
              {this.props.navigation.state.params.name}
            </Text>
          </View>
          <View>
            <Text style={styles.showGenre}>Crime, Drama</Text>
          </View>
        </View>

        <View style={styles.description}>
          <Text style={styles.rateText}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </Text>
        </View>

        <ScrollView style={styles.seasons}>
          <View style={styles.scroll}>
            <View>
            <TouchableHighlight onPress={() => this.props.navigation.navigate("Episodes",{image:1,name:'Narcos'})}>
              <Card style={styles.seasonCard}>
                <CardItem cardBody>
                  <ImageBackground
                    source={require("../../../assets/narcosS02.jpg")}
                    style={styles.cardImage}
                  >
                    <Text style={styles.cardImageText}>Season 1</Text>
                  </ImageBackground>
                </CardItem>
                <CardItem style={{ paddingTop: 0 }}>
                  <View style={styles.cardFoot}>
                    <View style={{ flex: 0.8 }}>
                      <Text style={{ fontSize: 17 }}>7/13 episodes</Text>
                    </View>
                    <View style={{ flex: 0.2, justifyContent: "center" }}>
                      <Button transparent>
                        <Icon name="md-more" />
                      </Button>
                    </View>
                  </View>
                </CardItem>
              </Card>
              </TouchableHighlight>
            </View>
            <View>
              <Card style={styles.seasonCard}>
                <CardItem cardBody>
                  <ImageBackground
                    source={require("../../../assets/narcosS02.jpg")}
                    style={styles.cardImage}
                  >
                    <Text style={styles.cardImageText}>Season 2</Text>
                  </ImageBackground>
                </CardItem>
              </Card>
            </View>
            <View>
              <Card style={styles.seasonCard}>
                <CardItem cardBody>
                  <ImageBackground
                    source={require("../../../assets/narcosS02.jpg")}
                    style={styles.cardImage}
                  >
                    <Text style={styles.cardImageText}>Season 3</Text>
                  </ImageBackground>
                </CardItem>
              </Card>
            </View>
            <View>
              <Card style={styles.seasonCard}>
                <CardItem cardBody>
                  <ImageBackground
                    source={require("../../../assets/narcosS01.jpg")}
                    style={styles.cardImage}
                  >
                    <Text style={styles.cardImageText}>Season 2</Text>
                  </ImageBackground>
                </CardItem>
              </Card>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
