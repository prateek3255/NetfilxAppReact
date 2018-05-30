const React = require('react-native')
const { Dimensions } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get('window').width;


export default {
    userContent:{
        backgroundColor:"#1A1A1A"
    },
    watching:{
        marginTop:deviceHeight/50,
        flex:1,
        flexDirection:'row',
        width:deviceWidth,
        justifyContent:'center'
    },
    watchingText:{
        color:'white',
        fontSize:16
    },
    boxes:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-evenly',
        marginTop:deviceHeight/40
    },
    card:{
        marginTop:deviceHeight/40
    },    
    cardImage:{
        width:deviceWidth/2.9,
        height:deviceWidth/2.9,
    },


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
        backgroundColor:'#f3f3f3',
    },
    image:{
        height:deviceHeight/12,
        width:deviceWidth/4,
    },
    accountImage:{
        height:deviceHeight/15,
        width:deviceHeight/15
    },
    view:{
        flex:1,
        width:null,
        alignItems:'center'
    },
    mainView:{
        marginTop:deviceHeight / 30,
        backgroundColor:'white',
        width:deviceWidth*(9/10),
        height: deviceHeight,
        marginLeft:deviceWidth*(1/20)
    },
    viewTitle:{
        paddingTop:deviceHeight/70,
        paddingLeft:deviceWidth/7,
        fontSize:16,
        fontWeight:'600'
    },
    innerView:{
        marginTop:deviceHeight/60,
        marginBottom:deviceHeight/60,
        marginRight:deviceWidth/20,
        height:deviceHeight-(deviceHeight/4),
        backgroundColor:'white',
        
    },
    accountFirst:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-evenly',
        height:deviceHeight/6
    },
    accountTitle:{
        fontSize:18,
        fontWeight:'600',
        color:'grey'
    },
    accountEmail:{
        fontWeight:'bold',
        color:'black'
    },
    accountPass:{
        color:'grey'
    }
  
  
};
