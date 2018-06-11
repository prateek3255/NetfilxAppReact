const React = require('react-native')
const { Dimensions }=React
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get('window').width;

export default{
    image:{
        height:(deviceWidth/6)*54,
        width:deviceWidth/6,
    },
    headerText:{
        color:'black',
        fontSize:17,
        fontWeight:'bold'
    },
    header:{
        backgroundColor:'white'
    },
}