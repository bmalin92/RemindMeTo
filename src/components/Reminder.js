import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { deleteReminder } from "../actions";

class Reminder extends React.Component {
  _deleteReminder = () => {
    this.props.deleteReminder(this.props.key);
  };

  render() {
    const reminder = this.props.reminder;

    return (
      <View key={this.props.key} style={styles.reminder}>
        <Text style={styles.reminderType}>{reminder.reminderType}</Text>

        <Text style={styles.reminderText}>{reminder.reminderText}</Text>

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
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "#ddd"
  },
  reminderType: {
    paddingLeft: 20,
    fontSize: 12
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
    reminderArray: state.reminderArray
  };
}

export default connect(mapStateToProps, {
  deleteReminder
})(Reminder);
