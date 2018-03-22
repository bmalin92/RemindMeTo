import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { deleteReminder } from "../actions";

class Reminder extends React.Component {
  _deleteReminder = () => {
    this.props.deleteReminder(this.props.index);
  };

  render() {
    const reminder = this.props.reminder;
    const days = reminder.reminderDays
      .filter(day => {
        return day.active === true;
      })
      .map((day, key) => {
        return (
          <Text key={key} style={styles.days}>
            {day.day}
          </Text>
        );
      });
    return (
      <View style={styles.reminder}>
        <Text style={styles.reminderType}>{reminder.reminderType}</Text>
        <View style={styles.daysNotificationContainer}>
          <View style={styles.daysContainer}>{days}</View>
          <Text style={styles.reminderText}>{reminder.reminderText}</Text>
        </View>

        <TouchableOpacity
          onPress={this._deleteReminder.bind(this)}
          style={styles.reminderDelete}
        >
          <Text style={styles.reminderDeleteText}>D</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  reminder: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "#ddd"
  },
  reminderType: {
    paddingLeft: 10,
    fontSize: 12
  },
  daysNotificationContainer: {},
  daysContainer: {
    paddingLeft: 20,
    flexDirection: "row"
  },
  days: {
    fontSize: 10,
    paddingRight: 10,
    color: "grey"
  },
  reminderText: {
    paddingLeft: 20,
    fontSize: 16
  },
  reminderDelete: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10
  },
  reminderDeleteText: {
    color: "white"
  }
});

function mapStateToProps(state) {
  return {
    reminderArray: state.reminderArray,
    reminderDays: state.reminderDays
  };
}

export default connect(mapStateToProps, {
  deleteReminder
})(Reminder);
