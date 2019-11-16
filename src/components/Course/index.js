import React, { useContext } from 'react';
import { View, Image } from 'react-native';
import { Container, Content, Text, Thumbnail } from 'native-base';
import AppHeader from '../AppHeader';

import { SchoolContext } from '../../contexts/SchoolContext';

const School = () => {
  const { schools, currentSchool, currentCourse } = useContext(SchoolContext);
  const school = schools.find(s => s.id === currentSchool);
  const course = school.courses.find(c => c.id === currentCourse);
  return (
    <Container>
      <AppHeader addBackButton />
      <Content>
        <Image source={school.image} style={{ height: 150 }} />
        <View alignItems="center" style={{ marginTop: -40 }}>
          <Thumbnail source={school.thumbnail} large />
          <Text>{school.name}</Text>
        </View>
        <View style={{ padding: 10 }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              marginTop: 10,
              marginBottom: 10
            }}
          >
            {course.name}
          </Text>
          <Text style={{ fontSize: 14, lineHeight: 30 }}>
            {course.description}
          </Text>
        </View>
      </Content>
    </Container>
  );
};

export default School;
