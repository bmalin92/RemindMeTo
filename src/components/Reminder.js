import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Font } from "expo";
import FontAwesome, { Icons } from "react-native-fontawesome";
import { connect } from "react-redux";
import { deleteReminder } from "../actions";

class Reminder extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      FontAwesome: require("../../assets/fonts/fontawesome.ttf")
    });
    this.setState({ fontLoaded: true });
  }

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
        <View style={styles.typeContainer}>
          <Text style={styles.reminderType}>{reminder.reminderType}</Text>
        </View>
        <View style={styles.daysNotificationContainer}>
          <View style={styles.daysContainer}>
            {days}
            <Text style={styles.reminderFrequency}>
              Every {reminder.reminderFrequency}
            </Text>
          </View>
          <Text style={styles.reminderText}>{reminder.reminderText}</Text>
        </View>

        <TouchableOpacity
          onPress={this._deleteReminder.bind(this)}
          style={styles.reminderDelete}
        >
          {this.state.fontLoaded ? (
            <Text style={styles.reminderDeleteText}>
              <FontAwesome>{Icons.trash}</FontAwesome>
            </Text>
          ) : null}
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
    paddingLeft: 0,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "#ddd"
  },
  typeContainer: {
    width: 80,
    alignItems: "center"
  },
  reminderType: {
    color: "#0f3d7e",
    fontSize: 12
  },
  daysNotificationContainer: {},
  daysContainer: {
    flexDirection: "row",
    alignItems: "baseline"
  },
  days: {
    fontSize: 10,
    fontWeight: "700",
    paddingRight: 10,
    color: "grey"
  },
  reminderText: {
    fontSize: 16,
    paddingRight: 25
  },
  reminderFrequency: {
    fontSize: 10,
    color: "grey"
  },
  reminderDelete: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    top: 10,
    bottom: 10,
    right: 15
  },
  reminderDeleteText: {
    color: "#0f3d7e",
    fontSize: 20
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
