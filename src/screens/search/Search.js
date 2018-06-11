import React, { Component } from "react";
import { Container,Content,Button,Header,Left, Body,Title,Icon, List, ListItem, Right, Item, Input } from "native-base";
import {View,TouchableWithoutFeedback,Text,StatusBar} from "react-native";
import styles from "./styles";

const datas=[
   "Available for downloads",
   "Netflix Originals",
   "TV",
   "Action",
   "Anime",
   "Award Winning",
   "Comedies",
   "Documentaries",
   "Dramas",
   "Horror",
   "Independent",
   ""
]
class Search extends Component {
  static navigationOptions={
    header:null
  }

  constructor(props){
    super(props);
  }
  render() {
    return (
        <Container>

         <Header searchBar androidStatusBarColor="#121212" style={[styles.header,{paddingTop:StatusBar.currentHeight}]}>
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
          <Item style={styles.searchBox}>
            <Icon name="ios-search"  style={styles.back}/>
            <Input placeholder="Search"  style={styles.input} autoFocus returnKeyType="search"/>
            <Icon name="ios-mic"  style={styles.back}/>
          </Item>
          </Body>
          <Right>
          <Button transparent>
            <Text style={styles.input}>Search</Text>
          </Button>
          </Right>
        </Header>



        <Content style={styles.content}>
            <List noBorder
            listBorderColor="#1A1A1A"
            listItemPadding={5}
            dataArray={datas}
            renderRow={data=><ListItem style={styles.listItem}>
          
            <Text style={styles.title}>{data}</Text>
            
            </ListItem>}/>
            
        
        </Content>
      </Container>
    );
  }
}
export default Search;
