import React, { Component } from "react";
import { Container,Content,Button,Header,Left, Body,Title,Icon, List, ListItem, Switch, Separator, Right } from "native-base";
import {Image,View,TouchableWithoutFeedback,Text} from "react-native";
import styles from "./styles";

const datas=[
    {title:'New Arrival',
     head:'Breaking Bad Season 1',
     date:'May 30',
     img:require('../../../assets/breaking.jpg')   
    },
    {title:'New Arrival',
     head:'Breaking Bad Season 2',
     date:'May 30',
     img:require('../../../assets/breakingS02.jpg')   
    },
    {title:'New Arrival',
     head:'Breaking Bad Season 3',
     date:'May 30',
     img:require('../../../assets/breakingS03.jpg')   
    },
    {title:'New Arrival',
     head:'Breaking Bad Season 4',
     date:'May 30',
     img:require('../../../assets/breakingS04.jpg')   
    },
    {title:'New Arrival',
     head:'Breaking Bad Season 5',
     date:'May 30',
     img:require('../../../assets/breakingS01.jpg')   
    },
    {title:'New Arrival',
     head:'Narcos Season 1',
     date:'May 30',
     img:require('../../../assets/narcosS01.jpg')   
    },
    {title:'New Arrival',
     head:'Narcos Season 2',
     date:'May 30',
     img:require('../../../assets/narcosS02.jpg')   
    },
    {title:'New Arrival',
     head:'Game of thrones Season 1',
     date:'May 30',
     img:require('../../../assets/thronesS01.jpg')   
    },
    {title:'New Arrival',
     head:'Game of thrones Season 2',
     date:'May 30',
     img:require('../../../assets/thrones.jpg')   
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
                  name="md-arrow-back"
                  style={styles.back}
                />
              </Button>
              </Left>
          <Body  style={{flex:1}}>
            <Title style={styles.headerTitle}>Notificaiton</Title>
          </Body>

          <Right/>
        </Header>
        <Content style={styles.content}>
            <List noBorder
            listBorderColor="#1A1A1A"
            listItemPadding={5}
            dataArray={datas}
            renderRow={data=><ListItem style={styles.listItem} onPress={() => this.props.navigation.navigate("Episodes",{image:1,name:'Narcos'})}>
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
