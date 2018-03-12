import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";
import Main from "./src/components/Main";
import reducer from "./src/reducers/reducer";

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
