import React, { useContext } from 'react';
import { Divider } from 'react-native-elements';
import { Container, Content } from 'native-base';

import AppHeader from '../AppHeader';
import School from './SchoolCard';

import { SchoolContext } from '../../contexts/SchoolContext';

const Home = () => {
  const { schools } = useContext(SchoolContext);

  return (
    <Container>
      <AppHeader />
      <Content>
        {schools.map((school, i) => (
          <React.Fragment key={school.name}>
            <School
              id={school.id}
              key={school.name}
              name={school.name}
              thumbnail={school.thumbnail}
              image={school.image}
              motto={school.moto}
            />
            {i < schools.length && <Divider />}
          </React.Fragment>
        ))}
      </Content>
    </Container>
  );
};

export default Home;
