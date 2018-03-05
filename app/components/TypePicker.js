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
        <Text style={styles.text}>Type</Text>
        <Picker
          style={styles.picker}
          selectedValue={this.state.type}
          onValueChange={this.updateType}
        >
          <Picker.Item label="Water" value="Drink Water" />
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
  picker: {
    width: 120,
    alignSelf: "center",
    marginBottom: 25
  },
  text: {
    fontSize: 18,
    width: 180,
    alignSelf: "center",
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  }
});
