import React from 'react';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import Constants from 'expo-constants';
import { Container, Header, Content, Text, Button } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import MyHeader from './components/Header';
import Home from './components/Home';

import { Router, Scene, Actions } from 'react-native-router-flux'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    // const TestPage = () => (
    //   <Container>
    //     <Header>
    //       <Text>Test Page</Text>
    //     </Header>
    //     <Content>
    //       <Button onPress={() => Actions.pageOne()}><Text>Home</Text></Button>
    //     </Content>
    //   </Container>
    // );

    return (
      <Router>
        <Scene key="root">
          <Scene key="pageOne" component={Home} title="College For You" initial={true} />
          {/* <Scene key="pageTwo" component={TestPage} title="PageTwo" initial={true} /> */}
        </Scene>
      </Router>
    );
  }
}