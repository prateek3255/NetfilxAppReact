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
  ListItem,
  ActionSheet
} from "native-base";
import styles1 from "./styles";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const HEADER_MAX_HEIGHT = deviceHeight * (2/3);
const HEADER_MIN_HEIGHT = deviceHeight / 10;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const SEASONS_BUTTONS =["Download","View Details","Cancel"]
const SCREEN_BUTTONS=["Add to your list","View Series Details","Cancel"]
const CANCEL_INDEX = 2

const datas=[
  {season:1,
  episodes:"7/13",
img:require("../../../assets/narcosS02.jpg")},
  {season:2,
    episodes:"7/13",
    img:require("../../../assets/narcosS01.jpg")},
    {season:3,
      episodes:"7/13",
      img:require("../../../assets/breakingS01.jpg")},
      {season:4,
        episodes:"7/13",
        img:require("../../../assets/breakingS02.jpg")},
        {season:5,
          episodes:"7/13",
          img:require("../../../assets/breakingS03.jpg")},
          {season:6,
            episodes:"7/13",
            img:require("../../../assets/thronesS01.jpg")}
]



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

  showActionSheet(BUTTONS,head){
    return(ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        title: head
      },
      buttonIndex => {
        this.setState({ clicked: BUTTONS[buttonIndex] });
      }))
 }

 

  _renderScrollViewContent() {
    return (
      <View style={[styles.scrollViewContent,styles1.scroll]}>
            {datas.map((e,i)=>{
              return(
                <View key={i}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate("Episodes",{image:1,name:'Narcos'})}>
              <Card style={styles1.seasonCard}>
                <CardItem cardBody>
                  <ImageBackground
                    source={e.img}
                    style={styles1.cardImage}
                  >
            <Text style={styles1.cardImageText}>Season {e.season}</Text>
                  </ImageBackground>
                </CardItem>
                  <View style={styles1.cardFoot}>
                    <View style={{ flex: 0.6, justifyContent:'center' }}>
                      <Text style={styles1.episodesRemaining}>{e.episodes}{' '}Episodes</Text>
                    </View>
                    <View style={{flex:0.2}}/>
                    <View style={{ flex: 0.2, justifyContent: "center" }}>
                      <Button transparent onPress={()=>this.showActionSheet(SEASONS_BUTTONS,"Season Options")}>
                        <Icon name="md-more" style={{fontSize:13}}/>
                      </Button>
                    </View>
                  </View>
                
              </Card>
              </TouchableHighlight>
            </View>
              )
            })}

           
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
      outputRange: [0, 550],
      extrapolate: "extend"
    });
    const viewScale = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2],
      outputRange: [0, 0.7],
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
    const textOpacity=scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 1],
    })

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
                transform: [{ translateY: viewTranslate }]
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
          <View style={styles1.headerView}>
            <View style={styles1.headerBeginView}>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon
                  name="arrow-back"
                  style={styles1.headerIcon}
                />
              </Button>
              <Button transparent><Animated.Text style={[styles1.headerText,{opacity:textOpacity}]}>{this.props.navigation.state.params.name}</Animated.Text></Button>
            </View>
            <View
              style={styles1.headerEndView}
            >
            
              <Button transparent onPress={() => this.props.navigation.navigate("Search")}>
                <Icon name="search" style={styles1.headerIcon} />
              </Button>
              <Button transparent onPress={()=>this.showActionSheet(SCREEN_BUTTONS,"Options")}>
                <Icon name="md-more" style={styles1.headerIcon} />
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
