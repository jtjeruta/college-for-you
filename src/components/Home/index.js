import React, { useContext } from "react";
import { Container, Content } from "native-base";

import AppHeader from "../AppHeader";
import School from "./SchoolCard";

import { SchoolContext } from "../../contexts/SchoolContext";

const Home = () => {
  const { schools } = useContext(SchoolContext);

  return (
    <Container>
      <AppHeader />
      <Content>
        {schools.map(school => (
          <School
            id={school.id}
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
};

export default Home;
