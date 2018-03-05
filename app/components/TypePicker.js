import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Picker } from "react-native";

export default class TypePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: ""
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>Type: </Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.type}
          onValueChange={this.updateType}
        >
          <Picker.Item style={styles.item} label="Water" value="Drink Water" />
          <Picker.Item label="Stand" value="Stand Up" />
          <Picker.Item label="Breathe" value="Take Deep Breaths" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
      </View>
    );
  }

  updateType = type => {
    this.setState({ type: type });
  };
}

const styles = StyleSheet.create({
  item: {
    textAlign: "center",
    position: "absolute",
    left: 0,
    right: 0
  },
  text: {
    // flex: 1
  },
  picker: {
    // flex: 2
  }
});
