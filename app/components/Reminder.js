import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class Reminder extends React.Component {
  render() {
    const reminder = this.props.val;

    return (
      <View key={this.props.keyval} style={styles.reminder}>
        <Text style={styles.reminderText}>{reminder.date}</Text>
        <Text style={styles.reminderText}>{reminder.reminder}</Text>

        <TouchableOpacity
          onPress={this.props.deleteMethod}
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
