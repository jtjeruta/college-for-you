import React from "react";
import { Container, Content } from "native-base";

import AppHeader from "../AppHeader";
import School from "./SchoolCard";

import schools from "../../stores/Schools";

const Home = () => (
  <Container>
    <AppHeader />
    <Content>
      {schools.map(school => (
        <School
          key={school.name}
          name={school.name}
          thumbnail={school.thumbnail}
          image={school.image}
          motto={school.moto}
        />
      ))}
    </Content>
  </Container>
);

export default Home;
