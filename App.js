import React from 'react';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import Constants from 'expo-constants';
import { Container, Header, Content } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import MyHeader from './components/Header';
import Home from './components/Home';

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

    return (
      <Container
        style={{
          marginTop: Constants.statusBarHeight,
        }}
      >
        <MyHeader />
        <Content style={{ padding: 10 }}>
          <Home />
        </Content>
      </Container>
    );
  }
}