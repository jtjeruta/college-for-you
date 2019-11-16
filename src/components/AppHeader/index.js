import React from 'react';
import PropType from 'prop-types';
import { Header, Body, Title, Left, Button, Icon, Right } from 'native-base';
// eslint-disable-next-line import/no-extraneous-dependencies
import Constants from 'expo-constants';
import { Actions } from 'react-native-router-flux';

const MyHeader = ({ title, addBackButton }) => (
  <Header
    iosBarStyle="light-content"
    androidStatusBarColor="rgba(0, 0, 0, 0.3)"
    style={{
      marginTop: Constants.statusBarHeight
    }}
  >
    {addBackButton && (
      <Left>
        <Button transparent onPress={() => Actions.pop()}>
          <Icon name="arrow-back" />
        </Button>
      </Left>
    )}
    <Body>
      <Title>{title}</Title>
    </Body>
    <Right>
      <Button transparent>
        <Icon />
      </Button>
    </Right>
  </Header>
);

MyHeader.propTypes = {
  title: PropType.string,
  addBackButton: PropType.bool
};

MyHeader.defaultProps = {
  title: 'College For You',
  addBackButton: false
};

export default MyHeader;
