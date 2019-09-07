import React from 'react';
import { Container, Content } from 'native-base';

import AppHeader from '../AppHeader';
import School from './SchoolCard';

import schools from '../../stores/Schools';

const Home = () => {
  return (
    <Container>
      <AppHeader />
      <Content>
        {schools.map((school, i) => (
          <School
            key={`school-${i}`}
            {...school}
          />
        ))}
      </Content>
    </Container>
  )
};

export default Home;