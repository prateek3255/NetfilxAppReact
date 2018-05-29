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
    backgroundColor: "white",
    elevation:15
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
    left: deviceWidth/35,
    color: "#C14748"
  },
  trailer: {
    height: deviceHeight/13,
    width: deviceWidth,
    backgroundColor: "#C14748",
    flex:0.2,
    shadowColor:'black',
    shadowRadius:2,
    shadowOffset:{height:10,width:10}
  },
  trailerText: {
    color: "white",
    fontSize: 25,
    top: deviceHeight/55,
    left: deviceWidth/25
  },
  remaining:{
    height: deviceHeight/6,
    width: deviceWidth,
    backgroundColor: "white",
    flex:0.5,
    zIndex:5,
    paddingLeft:deviceWidth/40,
    paddingRight:deviceWidth/40,
    // borderBottomColor:'grey',
    // borderBottomWidth:20
    elevation:50
  },

  ratings: {
    flex:0.25,
    flexDirection: "row",
    backgroundColor:'white',
    alignItems:'center'
  },
  rating: {
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor:'white',
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
    flex:0.3,
    flexDirection:'row',
    alignItems:'center'
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
    flex:0.5,
    flexDirection:'row',
    justifyContent:'center'
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
    backgroundColor: "white",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  },
  episodeCardItem:{
     paddingTop:deviceHeight/180  
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
