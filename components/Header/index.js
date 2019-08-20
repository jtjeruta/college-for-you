import React from 'react';
import {
  Header, Left, Button, Icon, Body,
  Right, Title,
} from 'native-base';

const MyHeader = () => (
  <Header
    iosBarStyle={"light-content"}
    androidStatusBarColor='#000'
    >
    {/* <Left>
      <Button transparent>
        <Icon name='arrow-back' />
      </Button>
    </Left> */}
    <Body>
      <Title>College For You</Title>
    </Body>
    {/* <Right>
      <Button transparent>
        <Icon name='menu' />
      </Button>
    </Right> */}
  </Header>
)

export default MyHeader;