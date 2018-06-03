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
    listItem:{
        height:deviceHeight/8,
        flex:1,
        flexDirection:'row',
        borderColor:'#1A1A1A',
        marginBottom:deviceHeight/50
    },
    image:{
        height:deviceHeight/8,
        width:null
    },
    imageView:{
        flex:0.3
    },
    pad:{
        flex:0.04
    },
    allText:{
        flex:0.6,
        height:deviceHeight/8,
        justifyContent:'space-evenly'
    },
    title:{
        color:'white',
        fontWeight:'bold',
        fontSize:15
    },
    head:{
        color:'white',
        fontWeight:'200',
        fontSize:13
    },
    date:{
        color:'grey',
        fontWeight:'500',
        fontSize:14

    }
  
  
};
