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
  TouchableHighlight
} from "react-native";
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
import styles1 from "./styles";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const HEADER_MAX_HEIGHT = deviceHeight / 2.2;
const HEADER_MIN_HEIGHT = deviceHeight / 10;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const eps = [
  {
    name: "Breaking 1",
    no: 1
  },
  {
    name: "Breaking 1",
    no: 2
  },
  {
    name: "Green Light",
    no: 3
  },
  {
    name: "BLue Light",
    no: 4
  },
  {
    name: "The Fly",
    no: 5
  },
  {
    name: "The Escape",
    no: 7
  },
  {
    name: "The Escape",
    no: 8
  },
  {
    name: "The Escape",
    no: 9
  },
  {
    name: "The Escape",
    no: 10
  },
  {
    name: "The Escape",
    no: 11
  },
  {
    name: "The Escape",
    no: 12
  },
  {
    name: "The Escape",
    no: 13
  },
  {
    name: "The Escape",
    no: 14
  },
  {
    name: "The Escape",
    no: 15
  }
];

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
      refreshing: false,
      clicked:false
    };
  }

  _renderScrollViewContent() {
    const data = Array.from({ length: 30 });
    return (
      <View style={styles.scrollViewContent}>
        <List
          listItemPadding={0}
          dataArray={eps}
          renderRow={ep =>
            <ListItem first  button={true} style={styles1.listItem} onPress={() => this.props.navigation.navigate("VideoPlayer")}>
              <View style={styles1.episodeView}>
                <View style={styles1.episodeWatched} />

                <View style={styles1.episodeDetailView}>
                  <View style={styles1.episodeNameView}>
                    <Text style={styles1.episodeTitle}>
                      {"    " + ep.name}
                    </Text>
                    <Text>
                      {"  "}S01E{ep.no}
                    </Text>
                  </View>
                  <View style={styles1.episodeNameView}>
                    <Text>
                      {"    "}
                    </Text>
                    <Icon name="ios-time-outline" style={styles1.episodeIcon} />
                    <Text>
                      {"  "}49:56{"          "}
                    </Text>
                    <Icon
                      name="ios-closed-captioning"
                      style={styles1.episodeIcon}
                    />
                    <Text>
                      {"  "}vost-english
                    </Text>
                  </View>
                </View>

                <View style={styles1.episodeMore}>
                  <Icon name="md-more" />
                </View>
              </View>
            </ListItem>}
        />
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
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 90],
      extrapolate: "clamp"
    });
    const viewScale = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, 0],
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
            source={require("../../../assets/narcos.jpg")}
          />
          <Animated.View
            style={[
              styles1.buttonAlign,
              {
                transform: [
                  { translateY: viewTranslate },
                  { scale: viewScale }
                ],
                zIndex: 7
              }
            ]}
          >
            <Button rounded style={styles1.button} danger={this.state.clicked} onPress={() => this.setState({ clicked: !this.state.clicked })}>
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
            <Text style={styles1.trailerText}>GreenLight S01 | E03</Text>
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
                  style={{ color: "white", fontSize: 15 }}
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
              <Button transparent onPress={() => this.props.navigation.navigate("Search")}>
                <Icon name="search" style={{ color: "white", fontSize: 15 }} />
              </Button>
              <Button transparent>
                <Icon name="md-more" style={{ color: "white", fontSize: 15 }} />
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
    height: HEADER_MAX_HEIGHT * (9 / 10),
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
    paddingTop: Platform.OS !== "ios" ? HEADER_MAX_HEIGHT : 0,
    marginBottom:deviceHeight/25
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    justifyContent: "center"
  }
});
