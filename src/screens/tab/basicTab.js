import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Tabs,
  Tab,
  Right,
  Left,
  Body
} from "native-base";
import TabOne from "./tabOne";
import TabTwo from "./tabTwo";
// import TabThree from "./tabThree";


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

        <Tabs>
          <Tab heading="Series">
            <TabOne />
          </Tab>
          <Tab heading="Movies">
            <TabTwo />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default BasicTab;
