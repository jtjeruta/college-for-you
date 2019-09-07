import React from 'react';
import {
  Header, Left, Button, Icon, Body,
  Right, Title,
} from 'native-base';
import Constants from 'expo-constants';

const MyHeader = ({ title }) => (
  <Header
    iosBarStyle="light-content"
    androidStatusBarColor="rgba(0, 0, 0, 0.3)"
    style={{
      marginTop: Constants.statusBarHeight,
    }}
  >
    {/* <Left>
      <Button transparent>
        <Icon name='arrow-back' />
      </Button>
    </Left> */}
    <Body>
      <Title>{title || 'College For You'}</Title>
    </Body>
    {/* <Right>
      <Button transparent>
        <Icon name='menu' />
      </Button>
    </Right> */}
  </Header>
);

export default MyHeader;
