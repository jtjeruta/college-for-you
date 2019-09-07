import React from "react";
import PropType from "prop-types";
import { Header, Body, Title } from "native-base";
// eslint-disable-next-line import/no-extraneous-dependencies
import Constants from "expo-constants";

const MyHeader = ({ title }) => (
  <Header
    iosBarStyle="light-content"
    androidStatusBarColor="rgba(0, 0, 0, 0.3)"
    style={{
      marginTop: Constants.statusBarHeight
    }}
  >
    {/* <Left>
      <Button transparent>
        <Icon name='arrow-back' />
      </Button>
    </Left> */}
    <Body>
      <Title>{title}</Title>
    </Body>
    {/* <Right>
      <Button transparent>
        <Icon name='menu' />
      </Button>
    </Right> */}
  </Header>
);

MyHeader.propTypes = {
  title: PropType.string
};

MyHeader.defaultProps = {
  title: "College For You"
};

export default MyHeader;
