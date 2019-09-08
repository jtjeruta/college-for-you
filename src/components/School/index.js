import React, { useContext } from "react";
import { Container, Content, Text } from "native-base";
import AppHeader from "../AppHeader";

import { SchoolContext } from "../../contexts/SchoolContext";

const School = () => {
  const { schools, currentSchool } = useContext(SchoolContext);
  const school = schools.find(s => s.id === currentSchool);
  return (
    <Container>
      <AppHeader />
      <Content>
        <Text>{school.name}</Text>
      </Content>
    </Container>
  );
};

export default School;
