import React, { Component } from "react";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./Screens/Home";
import Start from "./Screens/Start";
import Next from "./Screens/Next";
import Image from "./Screens/download.png";
import { createAppContainer } from "react-navigation";

const RootStack = createStackNavigator(
  {
    Home: Home,
    Start: Start,
    Next: Next
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return (
       <AppContainer />
    );
  }
}