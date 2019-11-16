import React, { useContext } from 'react';
import { Image, View } from 'react-native';
import { Container, Content, Text, Thumbnail } from 'native-base';
import AppHeader from '../AppHeader';

import { SchoolContext } from '../../contexts/SchoolContext';

const School = () => {
  const { schools, currentSchool } = useContext(SchoolContext);
  const school = schools.find(s => s.id === currentSchool);
  return (
    <Container>
      <AppHeader addBackButton />
      <Content>
        <Image source={school.image} style={{ height: 150 }} />
        <View alignItems="center" style={{ marginTop: -40 }}>
          <Thumbnail source={school.thumbnail} large />
          <Text>{school.name}</Text>
        </View>
      </Content>
    </Container>
  );
};

export default School;
