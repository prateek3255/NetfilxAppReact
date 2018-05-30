const React = require('react-native')
const { Dimensions }=React
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get('window').width;


export default {
    header:{
        backgroundColor:'#121212'
    },
    back:{ 
        color: "white", 
        fontSize: 19 
    },

    headerTitle:{
        color:'white',
        fontSize:17,
        fontWeight:'bold'
    },
    content:{
        backgroundColor:'#1A1A1A'
    },
     listView:{
         flex:1,
         flexDirection:'row',
         justifyContent: 'space-evenly',
         flexWrap: "wrap",
     },
     images:{
        width:deviceWidth/3.5,
        height:deviceHeight/3.5,
        marginTop:deviceHeight/40 
     }
  
};
