import React from "react";
import { StyleSheet, View, Picker } from "react-native";
import { connect } from "react-redux";
import { chooseFrequency } from "../actions";

class FrequencyPicker extends React.Component {
  _chooseFrequency = itemValue => {
    this.props.chooseFrequency(itemValue);
  };

  render() {
    return (
      <View>
        <Picker
          style={{ width: 200 }}
          selectedValue={this.props.reminderFrequency}
          onValueChange={(itemValue, itemIndex) =>
            this._chooseFrequency(itemValue)
          }
          mode={"dropdown"}
        >
          <Picker.Item label="15 minutes" value="15 minutes" />
          <Picker.Item label="30 minutes" value="30 minutes" />
          <Picker.Item label="45 minutes" value="45 minutes" />
          <Picker.Item label="1 hour" value="1 hour" />
          <Picker.Item label="1 hour 30 minutes" value="1 hour 30 minutes" />
          <Picker.Item label="2 hours" value="2 hours" />
          <Picker.Item label="3 hours" value="3 hours" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

function mapStateToProps(state) {
  return {
    reminderFrequency: state.reminderFrequency
  };
}

export default connect(mapStateToProps, { chooseFrequency })(FrequencyPicker);
