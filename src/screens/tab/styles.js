const React = require('react-native')
const { Dimensions }=React
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get('window').width;


export default {
  container: {
    backgroundColor: "#FFF"
  },
  background: {
    color: "#C14748",
    fontSize:20
  },
  image: {
    width: deviceWidth,
    height: deviceHeight/3,
    marginBottom: 1.5
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
    fontSize: 35,
    left: deviceHeight/90,
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
    fontSize: 20,
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
    fontSize: 15
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
     fontSize: 20 
  },
  showGenre:{
     left: 10, 
     fontStyle: "italic", 
     fontSize: 17 
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
    marginLeft:deviceWidth/60,
    marginRight:deviceWidth/60,
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
    fontSize:17,
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

  episodesRemaining:{
      fontSize:13,
      left:deviceWidth/25
  },

  listItem:{
    marginBottom:0,
    paddingBottom:0,
    bottom:0
  },
  
  episodeView:{flex:1,
    flexDirection:'row',
    height:deviceHeight/15},

  episodeWatched:{flex:0.01,
    height:deviceHeight/15,
    backgroundColor:'orange'},

  episodeDetailView:{flex:0.9} ,

  episodeNameView:{flex:0.5,
    flexDirection:'row',
    alignItems:'center',
    },

  episodeTitle:{fontSize:12,
    fontWeight:'bold',
    
  },
  episodeList:{
    marginBottom:deviceHeight/10
  },

  episodeIcon:{fontSize:15},

  episodeMore:{flex:0.05},

  loader:{
    height:100,
    top:deviceHeight/2.5,
    zIndex:1000,
    position:'absolute'
  },

  headerView:{ flex: 1, 
    flexDirection: "row", 
    alignItems: "flex-end" 
  },

  headerBeginView:{ flex: 0.8, 
    flexDirection:"row" 
  },

  headerIcon:{
    color: "white", 
    fontSize: 18 
  },

  headerEndView:{
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },

  headerText:{
    fontSize:18,
    fontWeight:'bold',
    color:'white',
  },

    
  
  
};
