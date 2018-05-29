import React, { Component } from "react";
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  Dimensions,
  ImageBackground,
  TouchableHighlight
} from "react-native";
import {
  Button,
  Icon,
  Card,
  CardItem,
  List,
  ListItem
} from "native-base";
import styles1 from "./styles";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const HEADER_MAX_HEIGHT = deviceHeight * (2/3);
const HEADER_MIN_HEIGHT = deviceHeight / 12;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class App extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(
        // iOS has negative initial scroll value because content inset...
        Platform.OS === "ios" ? -HEADER_MAX_HEIGHT : 0
      ),
      refreshing: false
    };
    this.arr = [
      require("../../../assets/breaking.jpg"),
      require("../../../assets/narcos.jpg"),
      require("../../../assets/stranger.jpg"),
      require("../../../assets/thrones.jpg")
    ];
  }

  _renderScrollViewContent() {
    return (
      <View style={[styles.scrollViewContent,styles1.scroll]}>
        <View>
            <TouchableHighlight onPress={() => this.props.navigation.navigate("Episodes",{image:1,name:'Narcos'})}>
              <Card style={styles1.seasonCard}>
                <CardItem cardBody>
                  <ImageBackground
                    source={require("../../../assets/narcosS02.jpg")}
                    style={styles1.cardImage}
                  >
                    <Text style={styles1.cardImageText}>Season 1</Text>
                  </ImageBackground>
                </CardItem>
                <CardItem style={styles1.episodeCardItem}>
                  <View style={styles1.cardFoot}>
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
            <TouchableHighlight onPress={() => this.props.navigation.navigate("Episodes",{image:1,name:'Narcos'})}>
              <Card style={styles1.seasonCard}>
                <CardItem cardBody>
                  <ImageBackground
                    source={require("../../../assets/narcosS01.jpg")}
                    style={styles1.cardImage}
                  >
                    <Text style={styles1.cardImageText}>Season 1</Text>
                  </ImageBackground>
                </CardItem>
                <CardItem style={styles1.episodeCardItem}>
                  <View style={styles1.cardFoot}>
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
            <TouchableHighlight onPress={() => this.props.navigation.navigate("Episodes",{image:1,name:'Narcos'})}>
              <Card style={styles1.seasonCard}>
                <CardItem cardBody>
                  <ImageBackground
                    source={require("../../../assets/narcosS02.jpg")}
                    style={styles1.cardImage}
                  >
                    <Text style={styles1.cardImageText}>Season 1</Text>
                  </ImageBackground>
                </CardItem>
                <CardItem style={styles1.episodeCardItem}>
                  <View style={styles1.cardFoot}>
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
            <TouchableHighlight onPress={() => this.props.navigation.navigate("Episodes",{image:1,name:'Narcos'})}>
              <Card style={styles1.seasonCard}>
                <CardItem cardBody>
                  <ImageBackground
                    source={require("../../../assets/narcosS01.jpg")}
                    style={styles1.cardImage}
                  >
                    <Text style={styles1.cardImageText}>Season 1</Text>
                  </ImageBackground>
                </CardItem>
                <CardItem style={styles1.episodeCardItem}>
                  <View style={styles1.cardFoot}>
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
            <TouchableHighlight onPress={() => this.props.navigation.navigate("Episodes",{image:1,name:'Narcos'})}>
              <Card style={styles1.seasonCard}>
                <CardItem cardBody>
                  <ImageBackground
                    source={require("../../../assets/narcosS02.jpg")}
                    style={styles1.cardImage}
                  >
                    <Text style={styles1.cardImageText}>Season 1</Text>
                  </ImageBackground>
                </CardItem>
                <CardItem style={styles1.episodeCardItem}>
                  <View style={styles1.cardFoot}>
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
            <TouchableHighlight onPress={() => this.props.navigation.navigate("Episodes",{image:1,name:'Narcos'})}>
              <Card style={styles1.seasonCard}>
                <CardItem cardBody>
                  <ImageBackground
                    source={require("../../../assets/narcosS01.jpg")}
                    style={styles1.cardImage}
                  >
                    <Text style={styles1.cardImageText}>Season 1</Text>
                  </ImageBackground>
                </CardItem>
                <CardItem style={styles1.episodeCardItem}>
                  <View style={styles1.cardFoot}>
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
      </View>
    );
  }

  render() {
    // Because of content inset the scroll value will be negative on iOS so bring
    // it back to 0.
    const scrollY = Animated.add(
      this.state.scrollY,
      Platform.OS === "ios" ? HEADER_MAX_HEIGHT : 0
    );
    const headerTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: "clamp"
    });

    const imageOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: "clamp"
    });
    const imageTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: "clamp"
    });
    const viewTranslate = scrollY.interpolate({
      inputRange: [0, deviceHeight/13,100],
      outputRange: [0, 150,500],
      extrapolate: "extend"
    });
    const viewScale = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, 0],
      extrapolate: "clamp"
    });
    const detailTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 200],
      extrapolate: "clamp"
    });
    const titleScale = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 1],
      extrapolate: "clamp"
    });
    const titleTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, -4],
      extrapolate: "clamp"
    });

    return (
      <View style={styles.fill}>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="#C14748"
        />
        <Animated.ScrollView
          style={styles.fill}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true }
          )}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => {
                this.setState({ refreshing: true });
                setTimeout(() => this.setState({ refreshing: false }), 1000);
              }}
              // Android offset for RefreshControl
              progressViewOffset={HEADER_MAX_HEIGHT}
            />
          }
          // iOS offset for RefreshControl
          contentInset={{
            top: HEADER_MAX_HEIGHT
          }}
          contentOffset={{
            y: -HEADER_MAX_HEIGHT
          }}
        >
          {this._renderScrollViewContent()}
        </Animated.ScrollView>
        <Animated.View
          pointerEvents="none"
          style={[
            styles.header,
            { transform: [{ translateY: headerTranslate }] }
          ]}
        >
          <Animated.Image
            style={[
              styles.backgroundImage,
              {
                opacity: imageOpacity,
                transform: [{ translateY: imageTranslate }]
              }
            ]}
            source={this.arr[this.props.navigation.state.params.image]}
          />
          <Animated.View
            style={[
              styles1.buttonAlign,
              {
                transform: [
                  { translateY: viewTranslate },
                  { scale: viewScale }
                ],
                zIndex: 6
              }
            ]}
          >
            <Button rounded style={styles1.button} onPress={()=>this.props.navigation.navigate("VideoPlayer")}>
              <Icon style={styles1.play} name="play" />
            </Button>
          </Animated.View>
          <Animated.View
            style={[
              styles1.trailer,
              {
                transform: [{ translateY: viewTranslate }, { scale: viewScale }]
              }
            ]}
          >
            <Text style={styles1.trailerText}>Watch trailer season 1</Text>
          </Animated.View>
          <Animated.View
            style={[
              styles1.remaining,
              {
                transform: [{ translateY: detailTranslate }]
              }
            ]}
          >
                <View style={styles1.ratings}>
              <View style={styles1.rating}>
                <Icon name="ios-star" style={styles1.background} />
                <Icon name="ios-star" style={styles1.background} />
                <Icon name="ios-star" style={styles1.background} />
                <Icon name="ios-star" style={styles1.background} />
                <Icon name="ios-star" style={styles1.background} />
              </View>
              <Text style={styles1.rateText}>5.0/5</Text>
              <View style={styles1.rate} />
              <View style={styles1.comment}>
                <Icon name="md-chatbubbles" style={styles1.background} />
                <Text style={styles1.rateText}>279</Text>
              </View>
            </View>
            <View style={styles1.show}>
          <View>
            <Text style={styles1.showName}>
              {this.props.navigation.state.params.name}
            </Text>
          </View>
          <View>
            <Text style={styles1.showGenre}>Crime, Drama</Text>
          </View>
        </View>
        <View style={styles1.description}>
          <Text style={styles1.rateText}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
          </Animated.View>
        </Animated.View>
        <Animated.View
          style={[
            styles.bar,
            {
              transform: [{ scale: titleScale }, { translateY: titleTranslate }]
            }
          ]}
        >
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <View style={{ flex: 0.8 }}>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon
                  name="arrow-back"
                  style={{ color: "white", fontSize: 19 }}
                />
              </Button>
            </View>
            <View
              style={{
                flex: 0.2,
                flexDirection: "row",
                justifyContent: "space-evenly"
              }}
            >
              <Button transparent>
                <Icon name="search" style={{ color: "white", fontSize: 19 }} />
              </Button>
              <Button transparent>
                <Icon name="md-more" style={{ color: "white", fontSize: 19 }} />
              </Button>
            </View>
          </View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1
  },
  content: {
    flex: 1
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#C14748",
    overflow: "hidden",
    height: HEADER_MAX_HEIGHT
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT * (7 / 10),
    resizeMode: "cover"
  },
  bar: {
    backgroundColor: "transparent",
    marginTop: Platform.OS === "ios" ? 28 : 38,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  },
  title: {
    color: "white",
    fontSize: 18
  },
  scrollViewContent: {
    // iOS uses content inset, which acts like padding.
    paddingTop: Platform.OS !== "ios" ? HEADER_MAX_HEIGHT : 0
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    justifyContent: "center"
  }
});
