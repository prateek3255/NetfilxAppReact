import React, { Component } from "react";
import { Container,Content,Button,Header,Left, Body,Title,Icon, List, ListItem, Switch, Separator, Right } from "native-base";
import {Image,View,TouchableHighlight,Text} from "react-native";
import styles from "./styles";

const datas=[
    {
     head:'Breaking Bad S01E01',
     date:'May 30',
     img:require('../../../assets/breaking.jpg')   
    },
    {
     head:'Breaking Bad S02E02',
     date:'May 30',
     img:require('../../../assets/breakingS02.jpg')   
    },
    {
     head:'Breaking Bad S03E03',
     date:'May 30',
     img:require('../../../assets/breakingS03.jpg')   
    },
]
class Download extends Component {
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
            <Title style={styles.headerTitle}>My Downloads</Title>
          </Body>
        </Header>
        <Content style={styles.content}>
            <List noBorder
            listBorderColor="#1A1A1A"
            listItemPadding={5}
            dataArray={datas}
            renderRow={data=><ListItem style={styles.listItem} onPress={() => this.props.navigation.navigate("VideoPlayer")}>
            <View style={styles.imageView}>
            <Image
            style={styles.image}
            source={data.img}/>
            </View>
            <View style={styles.pad}/>
            <View style={styles.allText}>
            <Text style={styles.head}>{data.head}</Text>
            <Text style={styles.date}>{data.date}</Text>
            </View>
            </ListItem>}/>
            
        
        </Content>
      </Container>
    );
  }
}
export default Download;
