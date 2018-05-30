import React, { Component } from "react";
import { Container,Content,Button,Header,Left, Body,Title,Icon, List, ListItem, Switch, Separator, Right } from "native-base";
import {Image,View,TouchableHighlight,Text} from "react-native";
import styles from "./styles";

const datas=[
    {title:'New Arrival',
     head:'Breaking Bad',
     date:'May 30',
     img:require('../../../assets/breaking.jpg')   
    },
    {title:'New Arrival',
     head:'Breaking Bad',
     date:'May 30',
     img:require('../../../assets/breaking.jpg')   
    },
    {title:'New Arrival',
     head:'Breaking Bad',
     date:'May 30',
     img:require('../../../assets/breaking.jpg')   
    },
    {title:'New Arrival',
     head:'Breaking Bad',
     date:'May 30',
     img:require('../../../assets/breaking.jpg')   
    },
    {title:'New Arrival',
     head:'Breaking Bad',
     date:'May 30',
     img:require('../../../assets/breaking.jpg')   
    },
    {title:'New Arrival',
     head:'Breaking Bad',
     date:'May 30',
     img:require('../../../assets/breaking.jpg')   
    },
    {title:'New Arrival',
     head:'Breaking Bad',
     date:'May 30',
     img:require('../../../assets/breaking.jpg')   
    },
    {title:'New Arrival',
     head:'Breaking Bad',
     date:'May 30',
     img:require('../../../assets/breaking.jpg')   
    },
]
class Notification extends Component {
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
            <Title style={styles.headerTitle}>Notificaiton</Title>
          </Body>
        </Header>
        <Content style={styles.content}>
            <List noBorder
            listBorderColor="#1A1A1A"
            listItemPadding={5}
            dataArray={datas}
            renderRow={data=><ListItem style={styles.listItem}>
            <View style={styles.imageView}>
            <Image
            style={styles.image}
            source={data.img}/>
            </View>
            <View style={styles.pad}/>
            <View style={styles.allText}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.head}>{data.head}</Text>
            <Text style={styles.date}>{data.date}</Text>
            </View>
            </ListItem>}/>
            
        
        </Content>
      </Container>
    );
  }
}
export default Notification;
