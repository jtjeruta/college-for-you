import React, { useContext, useState, useEffect } from 'react';
import { Image, View, Keyboard, Modal, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
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
  const { schools, currentSchool, setCurrentCourse } = useContext(
    SchoolContext
  );
  const [search, setSearch] = useState('');
  const [keyboardDidShow, setKeyboardDidShow] = useState(false);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => setKeyboardDidShow(true));
    Keyboard.addListener('keyboardDidHide', () => setKeyboardDidShow(false));
  }, []);
  const school = schools.find(s => s.id === currentSchool);
  const courses = school.courses
    .sort((a, b) => b.name.localeCompare(a.name))
    .filter(course => course.name.toLowerCase().includes(search));
  return (
    <Container>
      <AppHeader addBackButton />
      <Content>
        {!keyboardDidShow && (
          <>
            <Image source={school.image} style={{ height: 150 }} />
            <View alignItems="center" style={{ marginTop: -40 }}>
              <Thumbnail source={school.thumbnail} large />
              <Text>{school.name}</Text>
            </View>
            <Text style={{ marginLeft: 15, marginTop: 50, fontSize: 24 }}>
              Location
            </Text>
            <TouchableHighlight
              onPress={() => {
                setModal(true);
              }}
            >
              <Image
                source={school.location}
                style={{ height: 250, width: '100%' }}
              />
            </TouchableHighlight>
          </>
        )}
        <Text style={{ marginLeft: 15, marginTop: 50, fontSize: 24 }}>
          Available Courses
        </Text>
        <Form>
          <Item>
            <Label>Find Course: </Label>
            <Input onChangeText={e => setSearch(e)} />
          </Item>
        </Form>
        {courses.length <= 0 ? (
          <View style={{ padding: 30, color: '#dcdcdc' }}>
            <Text>No courses found...</Text>
          </View>
        ) : (
          <List>
            {courses.map(course => (
              <ListItem
                key={`course-${course.name}`}
                onPress={() => {
                  setCurrentCourse(course.id);
                  Actions.course();
                }}
              >
                <Text>{course.name}</Text>
              </ListItem>
            ))}
          </List>
        )}
      </Content>
      {modal && (
        <Modal visible={modal} transparent={false}>
          <TouchableHighlight
            onPress={() => {
              setModal(false);
            }}
          >
            <View
              flexDirection="row"
              alignItems="center"
              style={{ height: '100%' }}
            >
              <Image
                source={school.location}
                style={{ width: '100%', height: 250 }}
              />
            </View>
          </TouchableHighlight>
        </Modal>
      )}
    </Container>
  );
};

export default School;
