import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Modal
} from "react-native";
import { Picker, Form, Item as FormItem } from "native-base";
const Item = Picker.Item;

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
          // style={styles.picker}
          iosHeader="Select one"
          mode="dropdown"
          selectedValue={this.state.type}
          onValueChange={this.updateType}
        >
          <Item label="Water" value="key0" />
          <Item label="Stand" value="key1" />
          <Item label="Breathe" value="key2" />
          <Item label="Other" value="key3" />
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
