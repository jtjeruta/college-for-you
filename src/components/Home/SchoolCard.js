import React from 'react';
import { Image } from 'react-native';
import {
  Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right,
} from 'native-base';

const CardImage = ({
  name, thumbnail, image, motto,
}) => (
  <Card>
    <CardItem>
      <Left>
        <Thumbnail source={thumbnail} />
        <Body>
          <Text>{name}</Text>
          <Text note>{motto}</Text>
        </Body>
      </Left>
    </CardItem>
    <CardItem cardBody>
      <Image source={image} style={{ height: 200, width: null, flex: 1 }} />
    </CardItem>
    {/* <CardItem>
      <Left>
        <Button transparent>
          <Icon active name="thumbs-up" />
          <Text>12 Likes</Text>
        </Button>
      </Left>
      <Body>
        <Button transparent>
          <Icon active name="chatbubbles" />
          <Text>4 Comments</Text>
        </Button>
      </Body>
      <Right>
        <Text>11h ago</Text>
      </Right>
    </CardItem> */}
  </Card>
);

export default CardImage;
