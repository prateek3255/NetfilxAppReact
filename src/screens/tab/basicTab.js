import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Right,
  Left,
  Body
} from "native-base";


class BasicTab extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left>
          <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title> Netflix </Title>
          </Body>
          <Right >
          <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='md-more' />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}

export default BasicTab;

// export default createMaterialTopTabNavigator({
//   Series: TabOne,
//   Movies: TabTwo,
// });




