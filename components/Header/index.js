import React from 'react';
import {
  Container, Header, Body, Title,
  // Left, Right, Button, Icon,
} from 'native-base';

const MyHeader = () => (
  <Container>
    <Header>
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
  </Container>
);


export default MyHeader;
