import React, { Component } from "react";
import { Container,Content,Button,Header,Left, Body,Title,Icon } from "native-base";
import {Image,View,TouchableHighlight} from "react-native";
import styles from "./styles";

const datas=[
    {
     img:require('../../../assets/breaking.jpg')   
    },
    {
     img:require('../../../assets/breakingS01.jpg')   
    },
    {
     img:require('../../../assets/breakingS02.jpg')   
    },
    {
     img:require('../../../assets/breakingS03.jpg')   
    },
    {
     img:require('../../../assets/breakingS04.jpg')   
    },
    {
     img:require('../../../assets/narcos.jpg')   
    },
]

const Images=(props)=>{    
  return( 
 
    datas.map((e,i)=>{
      return <Image
      source={e.img}
      style={styles.images}
      key={i}/>   
    })

  )
  
}

class MyList extends Component {
  static navigationOptions={
    header:null
  }

  constructor(props){
    super(props);
  }
  render() {
    return (
        <Container>
        <Header androidStatusBarColor="#121212" style={styles.header}>
          <Left>
          <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon
                  name="arrow-back"
                  style={styles.back}
                />
              </Button>
          </Left>
         
          <Body>
            <Title style={styles.headerTitle}>My List</Title>
          </Body>
        </Header>
        <Content style={styles.content}>
            <View style={styles.listView}>
            {/* <Image
              source={require('../../../assets/breaking.jpg')}
              style={styles.images}/>
               <Image
              source={require('../../../assets/breaking.jpg')}
              style={styles.images}/>
               <Image
              source={require('../../../assets/breaking.jpg')}
              style={styles.images}/>
               <Image
              source={require('../../../assets/breaking.jpg')}
              style={styles.images}/>
               <Image
              source={require('../../../assets/breaking.jpg')}
              style={styles.images}/>
               <Image
              source={require('../../../assets/breaking.jpg')}
              style={styles.images}/> */}
              <Images/>
            </View>
            
        
        </Content>
      </Container>
    );
  }
}
export default MyList;
