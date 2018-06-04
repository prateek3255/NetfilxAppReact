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
        height:deviceHeight/25,
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
        marginLeft:deviceWidth*(1/20),
        marginBottom:deviceHeight / 30,
        borderColor:'grey',
        borderWidth:1
    },
    viewTitle:{
        paddingTop:deviceHeight/70,
        paddingLeft:deviceWidth/20,
        fontSize:18,
        fontWeight:'bold',
        color:'black',
    },
    innerView:{
        marginTop:deviceHeight/60,
        marginBottom:deviceHeight/60,
        marginRight:deviceWidth/20,
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
    },
    normalItems:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    normalText:{
        color:'black'
    },
    normalIcon:{
        color:'grey'
    },
    cardDetailItem:{
        flex:1,
        flexDirection:'row',
    },
    buttonItems:{
        flex:1,
        justifyContent:'space-between',
    },
    buttonItemText:{
        fontWeight:'bold'
    },
    button:{
      
        flex:0.5,
       
    },
    normalItems2:{
        flex:0.5,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    biggerItem1:{
        height:deviceHeight/4
    },
    biggerItem2:{
        height:deviceHeight/6
    },
    headingFirst:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-evenly',
        height:deviceHeight/10
    },
    headingTitle:{
        flex:1
    },
    profileImage:{
        height:deviceHeight/25,
        width:deviceHeight/25,
    },
    lastText:{
        marginTop:deviceHeight/4,
        color:'grey'
    }
  
};
