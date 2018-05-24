const React = require('react-native')
const { Dimensions }=React
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get('window').width;


export default {
  container: {
    backgroundColor: "#FFF"
  },
  background: {
    color: "#C14748"
  },
  image: {
    width: deviceWidth,
    height: deviceHeight/3
  },
  detailImage: {
    width: deviceWidth,
    height: deviceHeight/2.2
  },
  button: {
    height: deviceHeight/11,
    width: deviceHeight/11,
    backgroundColor: "white"
  },
  buttonAlign: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    left: (deviceWidth/6)*4.5,
    top: deviceHeight/5
  },
  play: {
    fontSize: 43,
    left: deviceHeight/60,
    color: "#C14748"
  },
  trailer: {
    height: deviceHeight/13,
    width: deviceWidth,
    backgroundColor: "#C14748"
  },
  trailerText: {
    color: "white",
    fontSize: 25,
    top: deviceHeight/55,
    left: deviceWidth/25
  },
  ratings: {
    flex:0.16,
    flexDirection: "row",
  },
  rating: {
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  rate: {
    flex: 0.4
  },
  rateText: {
    fontSize: 19
  },
  comment: {
    flex: 0.15,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  show:{
    flex:0.1,
    flexDirection:'row'
  },
  showName:{
     fontWeight: "bold", 
     fontSize: 23 
  },
  showGenre:{
     left: 10, 
     fontStyle: "italic", 
     fontSize: 20 
  },
  description:{
    flex:0.35,
    flexDirection:'row'
  },
  seasons:{
    flex:0.5, 
    backgroundColor:'red', 
  },
  seasonCard:{
    width:deviceWidth/2.25,
    height:deviceHeight/3.1,
    backgroundColor: 'white',
    marginLeft:deviceHeight/70,
    marginRight:deviceHeight/70,
    marginTop: deviceHeight/70,
    marginBottom: deviceHeight/70,
    alignItems: 'center',
    padding:0

  },
  cardImage:{
    width:deviceWidth/2.25,
    height:deviceHeight/3.5
  },
  cardImageText:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
    top:deviceHeight/4.3,
    left:deviceWidth/25
  },
  scroll:{
    flexDirection: "row",
    backgroundColor: "grey",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  },
  cardFoot:{ flex: 1, 
  flexDirection: "row", 
  height: deviceHeight/35 },
  
  episodeView:{flex:1,
    flexDirection:'row',
    height:deviceHeight/22},

  episodeWatched:{flex:0.01,
    height:deviceHeight/22,
    backgroundColor:'orange'},

  episodeDetailView:{flex:0.9} ,

  episodeNameView:{flex:0.5,
    flexDirection:'row',
    alignItems:'center'},

  episodeTitle:{fontSize:15,
    fontWeight:'bold'},

  episodeIcon:{fontSize:15},

  episodeMore:{flex:0.05},

  
  
};
