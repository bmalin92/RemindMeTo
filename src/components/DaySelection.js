import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { selectDay } from "../actions";

class DaySelection extends React.Component {
  _selectDay = () => {
    this.props.selectDay(this.props.index);
  };

  render() {
    const day = this.props.day;
    return (
      <View key={this.props.key}>
        <TouchableOpacity
          style={day.active ? styles.daySelected : styles.dayOption}
          onPress={this._selectDay.bind(this)}
        >
          <Text>{day.day}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dayOption: {
    padding: 10,
    backgroundColor: "#1966D210",
    borderRadius: 10
  },
  daySelected: {
    padding: 10,
    backgroundColor: "#1966D275",
    borderRadius: 10
  }
});

function mapStateToProps(state) {
  return {
    reminderDays: state.reminderDays
  };
}

export default connect(mapStateToProps, { selectDay })(DaySelection);
