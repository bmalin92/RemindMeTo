import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { deleteReminder } from "../actions";

class Reminder extends React.Component {
  render() {
    const reminder = this.props.reminder;

    _deleteReminder = () => {
      this.props.deleteReminder(this.props.key);
    };

    return (
      <View key={this.props.key} style={styles.reminder}>
        <Text style={styles.reminderText}>{reminder.reminderText}</Text>

        <TouchableOpacity
          onPress={this.props._deleteReminder}
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
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "#ddd"
  },
  reminderText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: "white"
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
    reminderArray: state.reminderArray
  };
}

export default connect(mapStateToProps, {
  deleteReminder
})(Reminder);
