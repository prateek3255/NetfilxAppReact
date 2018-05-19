import React, { Component } from "react";
import {
  Button,
  Icon,
  Container,
  Header,
  Left,
  Right,
  Title,
  Body
} from "native-base";
import { ImageBackground, View, Text } from "react-native";
import styles from "./styles";

export default class DetailScreen extends Component {
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
      <Container>
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
            <View>
              <Icon name="ios-star" style={styles.background} />
            </View>
            <View>
              <Icon name="ios-star" style={styles.background} />
            </View>
            <View>
              <Icon name="ios-star" style={styles.background} />
            </View>
            <View>
              <Icon name="ios-star" style={styles.background} />
            </View>
            <View>
              <Icon name="ios-star" style={styles.background} />
            </View>
          </View>
          <View style={{ flex: 0.4 }}>
            <Text style={{ fontSize: 19 }}>5.0/5</Text>
          </View>
          <View
            style={{
              flex: 0.2,
              flexDirection: "row",
              justifyContent: "flex-end"
            }}
          >
            <View>
              <Icon name="md-chatbubbles" style={styles.background} />
            </View>
            <View>
              <Text style={{ fontSize: 19, marginLeft: 9 }}>279</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
          }}
        >
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 23 }}>
              {this.props.navigation.state.params.name}
            </Text>
          </View>
          <View>
            <Text style={{ marginLeft: 10, fontStyle: "italic", fontSize: 20 }}>
              Crime, Drama
            </Text>
          </View>
        </View>
      </Container>
    );
  }
}
