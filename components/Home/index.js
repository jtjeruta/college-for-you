import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import {
  Container, Header, Content, Card, CardItem,
  Left, Button, Icon, Body, Title,
} from 'native-base';


import School from './SchoolCard';

const Home = () => {
  const schools = [
    {
      name: 'Central Philippine University',
      thumbnail: 'https://picsum.photos/200',
      image: 'https://picsum.photos/200',
    },
    {
      name: 'University of the Philippines Visayas',
      thumbnail: 'https://picsum.photos/200',
      image: 'https://picsum.photos/200',
    },
    {
      name: 'West Visayas State University',
      thumbnail: 'https://picsum.photos/200',
      image: 'https://picsum.photos/200',
    },
    {
      name: 'San Augustine University',
      thumbnail: 'https://picsum.photos/200',
      image: 'https://picsum.photos/200',
    },
    {
      name: 'University of Iloilo',
      thumbnail: 'https://picsum.photos/200',
      image: 'https://picsum.photos/200',
    },
  ];
  return (
    <View style={{ padding: 10 }}>
      {
        schools.map((school, i) => (
          <School
            key={`school-${i}`}
            {...school}
          />
        ))
      }
    </View>
  )
};

export default Home;