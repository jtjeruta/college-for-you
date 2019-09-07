import React from "react";
import PropTypes from "prop-types";
import { Image } from "react-native";
import { Card, CardItem, Thumbnail, Text, Left, Body } from "native-base";

import defaultImage from "../../assets/schools/default-image.jpg";

const CardImage = ({ name, thumbnail, image, motto }) => (
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

CardImage.propTypes = {
  name: PropTypes.string,
  thumbnail: PropTypes.node,
  motto: PropTypes.string,
  image: PropTypes.node
};

CardImage.defaultProps = {
  name: "No name",
  thumbnail: defaultImage,
  motto: "No motto",
  image: defaultImage
};

export default CardImage;
