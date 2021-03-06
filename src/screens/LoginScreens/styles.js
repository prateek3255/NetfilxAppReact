const React = require('react-native')
const { Dimensions }=React
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get('window').width;


const ratio=deviceWidth/200
export default {
  image:{
      height:(deviceWidth/6)*54,
      width:deviceWidth/6,
  },
  registerContent:{
      backgroundColor:'black'
  },
  headerText:{
      color:'black',
      fontSize:17,
      fontWeight:'bold'
  },
  header:{
      backgroundColor:'white'
  },
  content:{
      backgroundColor:'#1A1A1A'
  },
  contentImage:{
      height:deviceHeight/1.5,
      width:deviceWidth
  },
  textView:{
      flex:1,
      justifyContent:'flex-start',
      alignItems:'center'
  },
  firstText:{
        fontSize:22,
        color:'white',
        fontWeight:'bold',
        paddingBottom:deviceHeight/100
  },
  secondText:{
    fontSize:17,
    color:'white',
    paddingBottom:deviceHeight/70
},
   buttonText:{
    fontSize:16,
    color:'white',
    paddingTop:deviceHeight/200,
    paddingLeft:deviceWidth/50,
    paddingRight:deviceWidth/50,
    paddingBottom:deviceHeight/200
   },
   button:{
       backgroundColor:'#FF6D2D',
       
   },
   tabs:{
       paddingTop:deviceHeight/20,
       flex:1,
       flexDirection:'row',
       justifyContent:'space-evenly',
       width:deviceWidth
   },
   icons:{
       fontSize:70,
       color:"white"
   }, 
   thirdTextView:{
        flex:1,
        alignItems:'center',
        paddingTop: deviceHeight/20,
        width: deviceWidth*(2/3),
        marginBottom:deviceHeight/20
   },
   cancelImage:{
       width:deviceWidth,
       height:deviceHeight/2.5,
       paddingTop:deviceHeight/10
   },
   selectedIcon:{
       borderBottomColor:"#FF6D2D",
       borderBottomWidth: 3
   },

   //login
   headerArrangement:{flex:1,
    flexDirection:'row',
    alignItems:'center'},
    back:{ color: "white", 
    fontSize: 19 },
   headerLogin:{
       backgroundColor:"#121212",
   },
   empty:{
       flex:2
   },
   loginHeaderText:{
    color:'white',
    fontSize:17,
    fontWeight:'bold'
},
    login:{
        flex:1,
        height:(deviceHeight-(deviceHeight/8)),
        justifyContent:'center',
        paddingLeft:deviceWidth/15,
        paddingRight:deviceWidth/15
    },
    inputLabel:{
        color:'white'
    },
    input:{
        color:'white'
    },
    loginButton:{
        marginTop:deviceHeight/30,
        backgroundColor:'#FF6D2D',
        width:deviceWidth-(deviceHeight/15),
        flex:0.07,
        justifyContent:'center',
        alignItems:'center',
        height:deviceHeight/10
    },
    loginBottomText:{
        fontSize:17,
        fontWeight:'600',
        color:'white',
        paddingTop:deviceHeight/70
    }
  
  
};
