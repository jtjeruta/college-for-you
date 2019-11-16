import React, { useContext, useState } from 'react';
import { Image, View } from 'react-native';
import {
  Container,
  Content,
  Text,
  Thumbnail,
  Form,
  Item,
  Label,
  Input,
  List,
  ListItem
} from 'native-base';
import AppHeader from '../AppHeader';

import { SchoolContext } from '../../contexts/SchoolContext';

const School = () => {
  const { schools, currentSchool } = useContext(SchoolContext);
  const [search, setSearch] = useState('');
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
        <Form style={{ marginTop: 50 }}>
          <Item>
            <Label>Find Courses</Label>
            <Input onChangeText={e => setSearch(e)} />
          </Item>
        </Form>
        <List>
          {school.courses
            .filter(course => course.name.toLowerCase().includes(search))
            .map(course => (
              <ListItem key={`course-${course.name}`}>
                <Text>{course.name}</Text>
              </ListItem>
            ))}
        </List>
      </Content>
    </Container>
  );
};

export default School;
