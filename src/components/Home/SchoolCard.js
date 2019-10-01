import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Image, TouchableWithoutFeedback } from "react-native";
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body
  // Button,
  // Icon,
  // Right
} from "native-base";
import { Actions } from "react-native-router-flux";

import defaultImage from "../../assets/schools/default-image.jpg";

import { SchoolContext } from "../../contexts/SchoolContext";

const CardImage = ({ id, name, thumbnail, image, motto }) => {
  const { setCurrentSchool } = useContext(SchoolContext);
  const handleGoToSchool = () => {
    setCurrentSchool(id);
    Actions.school();
  };
  return (
    <TouchableWithoutFeedback onPress={() => handleGoToSchool()}>
      <Card transparent>
        <CardItem>
          <Left>
            <Thumbnail source={thumbnail} />
            <Body>
              <Text>{name}</Text>
              {motto && <Text note>{motto}</Text>}
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={image} style={{ height: 200, width: null, flex: 1 }} />
        </CardItem>
        <CardItem>
          {/* <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>12 Likes</Text>
            </Button>
          </Left> */}
          {/* <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>4 Comments</Text>
            </Button>
          </Body> */}
        </CardItem>
      </Card>
    </TouchableWithoutFeedback>
  );
};

CardImage.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  thumbnail: PropTypes.node,
  motto: PropTypes.string,
  image: PropTypes.node
};

CardImage.defaultProps = {
  id: null,
  name: "No name",
  thumbnail: defaultImage,
  motto: null,
  image: defaultImage
};

export default CardImage;
