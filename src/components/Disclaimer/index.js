import React from 'react';
import { View } from 'react-native';
import { Container, Content, Text, H1, Button } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';

const Disclaimer = () => {
  return (
    <Container>
      <Content contentContainerStyle={{ flex: 1, padding: 10 }}>
        <Grid style={{ alignItems: 'center' }}>
          <Col>
            <H1 style={{ textAlign: 'center' }}>Disclaimer</H1>
            <Text style={{ textAlign: 'center' }}>
              The following courses provided are from our data collection from
              different the school websites. If the following courses have
              errors, misinterpreted data, or outdated content please contact
              college4you.iloilo.ph@gmail.com.
            </Text>
            <View alignItems="center">
              <Button
                style={{ marginTop: 30, maxWidth: 100 }}
                onPress={async () => Actions.home()}
              >
                <Text>Continue</Text>
              </Button>
            </View>
          </Col>
        </Grid>
      </Content>
    </Container>
  );
};

export default Disclaimer;
