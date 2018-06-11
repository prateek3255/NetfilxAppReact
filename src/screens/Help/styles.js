const React = require('react-native')
const { Dimensions }=React
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get('window').width;


export default {
    headerView:{
        backgroundColor:'white',
        flex:0.1,
        flexDirection:'row',
        width:deviceWidth
    },
    back:{ 
        color: "black", 
        fontSize: 19 
    },
   

    headerTitle:{
        color:'white',
        fontSize:17,
        fontWeight:'bold'
    },
    content:{
        flex:0.9,
        backgroundColor:'white'
    },
    firstView:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center'
    },
    firstText:{
        fontWeight:'bold',
        color:'black',
        fontSize:18
    },
    list:{
        marginTop:deviceHeight/15,
        marginRight:deviceWidth/8,
    },

    image:{
        height:(deviceWidth/23),
        width:deviceWidth/6,
        marginTop:deviceHeight/40
    },

    empty:{
        flex:0.43
    },

    imageView:{
        flex:0.3
    },
    pad:{
        flex:0.04
    },
    blue:{
        color:'#0071EB',
        
    },
    lastView:{
        marginTop:deviceHeight/8.5,
        flex:1,
        alignItems:'center',
        marginLeft:deviceWidth/7,
        marginRight:deviceWidth/7        
    },
    smallText:{
        marginTop:deviceHeight/60,
        marginBottom:deviceHeight/60,
        textAlign:'center'
    },
    buttonText:{
        color:'white',
        fontSize:19,
        marginLeft:deviceWidth/20,
        marginRight:deviceWidth/20
    }
  
  
};
