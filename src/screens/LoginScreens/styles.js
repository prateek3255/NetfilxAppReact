const React = require('react-native')
const { Dimensions }=React
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get('window').width;


export default {
  image:{
      height:deviceHeight/15,
      width:deviceWidth/6,
  },
  headerText:{
      color:'black',
      fontSize:20,
      fontWeight:'bold'
  },
  header:{
      backgroundColor:'white'
  },
  content:{
      backgroundColor:'black'
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
        fontSize:25,
        color:'white',
        fontWeight:'bold',
        paddingBottom:deviceHeight/100
  },
  secondText:{
    fontSize:20,
    color:'white',
    paddingBottom:deviceHeight/70
},
   buttonText:{
    fontSize:19,
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
        width: deviceWidth*(2/3)
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
   headerLogin:{
       backgroundColor:"black",
   },
   loginHeaderText:{
    color:'white',
    fontSize:20,
    fontWeight:'bold'
},
    login:{
        flex:1,
        height:deviceHeight,
        justifyContent:'center'
    }
  
  
};
