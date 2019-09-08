import React from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from "@expo/vector-icons";
import { Router, Scene } from "react-native-router-flux";
import RobotoFont from "native-base/Fonts/Roboto.ttf";
import RobotoMediumFont from "native-base/Fonts/Roboto_medium.ttf";

import Home from "./src/components/Home";
import School from "./src/components/School";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: RobotoFont,
      Roboto_medium: RobotoMediumFont,
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  render() {
    const { isReady } = this.state;
    if (!isReady) {
      return <AppLoading />;
    }

    // const TestPage = () => <Text>Hello</Text>;

    return (
      <Router>
        <Scene key="root">
          <Scene
            key="home"
            component={Home}
            title="College For You"
            initial
            hideNavBar
          />
          <Scene key="school" component={School} title="PageTwo" hideNavBar />
        </Scene>
      </Router>
    );
  }
}
