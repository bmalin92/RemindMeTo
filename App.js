import React from "react";
import Main from "./app/components/Main";
import Expo, { Constants } from "expo";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";

async function register() {
  const { status } = await Expo.Permissions.askAsync(
    Expo.Permissions.NOTIFICATIONS
  );

  if (status !== "granted") {
    alert("You need to enable permissions in settings");
    return;
  }

  const token = await Expo.Notifications.getExpoPushTokenAsync();
}

export default class App extends React.Component {
  componentWillMount() {
    register();
    this.listener = Expo.Notifications.addListener(this.listen);
  }

  componentWillUnmount() {
    this.listener && Expo.Notifications.removeListener(this.listen);
  }
  listen = ({ origin, data }) => {
    console.log("cool data", origin, data);
  };
  render() {
    return <Main />;
  }
}
