import React from 'react';
import { Container, Content } from 'native-base';

import cpu_building from '../../assets/schools/cpu_building.jpg';
import up_building from '../../assets/schools/up_building.jpg';
import wvsu_building from '../../assets/schools/wvsu_building.png';
import cpu_logo from '../../assets/schools/cpu_logo.png';
import up_logo from '../../assets/schools/up_logo.png';
import wvsu_logo from '../../assets/schools/wvsu_logo.png';
import AppHeader from '../AppHeader';


import School from './SchoolCard';

const Home = () => {
  const schools = [
    {
      name: 'Central Philippine University',
      thumbnail: cpu_logo,
      image: cpu_building,
      motto: 'Scientia et Fides',
    },
    {
      name: 'University of the Philippines Visayas',
      thumbnail: up_logo,
      image: up_building,
      motto: 'Honor and Excellence',
    },
    {
      name: 'West Visayas State University',
      thumbnail: wvsu_logo,
      image: wvsu_building,
      motto: 'Servitium, Concordia, Excellentia',
    },
  ];
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