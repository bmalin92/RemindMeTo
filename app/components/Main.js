import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Modal,
  Picker
} from "react-native";

import Reminder from "./Reminder";
import TypePicker from "./TypePicker";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reminderArray: [],
      reminderText: "",
      modalVisible: false
    };
  }

  render() {
    let reminders = this.state.reminderArray.map((val, key) => {
      return (
        <Reminder
          key={key}
          keyval={key}
          val={val}
          deleteMethod={() => this.deleteReminder(key)}
        />
      );
    });

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Remind Me To...</Text>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          style={styles.modal}
          visible={this.state.modalVisible}
          onRequestClose={this.closeModal.bind(this)}
        >
          <View style={styles.modal}>
            <View style={styles.modalView}>
              <Text style={styles.modalHeader}>Add a Reminder</Text>

              <TypePicker />

              <View style={styles.completeReminderContainer}>
                <TouchableOpacity
                  style={styles.completeReminder}
                  onPress={this.addReminder.bind(this)}
                >
                  <Text style={styles.completeReminderText}>ADD REMINDER</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <ScrollView style={styles.scrollContainer}>{reminders}</ScrollView>

        <View style={styles.footer}>
          <TextInput
            style={styles.textInput}
            onChangeText={reminderText => this.setState({ reminderText })}
            value={this.state.reminderText}
            placeholder=">note"
            placeholdeTextColor="white"
            underlineColorAndroid="transparent"
          />
        </View>

        <TouchableOpacity
          onPress={this.openModal.bind(this)}
          style={styles.addButton}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }

  openModal() {
    this.setState({
      modalVisible: true
    });
  }

  closeModal() {
    this.setState({
      modalVisible: false
    });
  }

  addReminder() {
    if (this.state.reminderText) {
      let d = new Date();
      this.state.reminderArray.push({
        date: d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
        reminder: this.state.reminderText
      });
      this.setState({ reminderArray: this.state.reminderArray });
      this.setState({ reminderText: "" });
    }
  }

  deleteReminder(key) {
    this.state.reminderArray.splice(key, 1);
    this.setState({ reminderArray: this.state.reminderArray });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: "#1966D2",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 10,
    borderBottomColor: "#ddd"
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    paddingTop: 40,
    paddingBottom: 20
  },
  scrollContainer: {
    flex: 1
  },
  modal: {
    backgroundColor: "#00000080",
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  modalHeader: {
    color: "#1966D2",
    fontSize: 25,
    marginTop: 20,
    textAlign: "center"
  },
  modalView: {
    width: 360,
    height: 500,
    borderRadius: 10,
    backgroundColor: "white"
  },
  completeReminderContainer: {
    flex: 1,
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    paddingHorizontal: 20
  },
  completeReminder: {
    backgroundColor: "#1966D2",
    padding: 10,
    alignItems: "center",
    borderRadius: 10
  },
  completeReminderText: {
    color: "white",
    fontWeight: "bold"
  },
  textInput: {
    alignSelf: "stretch",
    color: "#333",
    padding: 10,
    backgroundColor: "#fff",
    borderTopWidth: 2,
    borderTopColor: "#ddd"
  },
  addButton: {
    position: "absolute",
    zIndex: 10,
    right: 20,
    bottom: 20,
    backgroundColor: "#1966D2",
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8
  },
  addButtonText: {
    color: "white",
    fontSize: 24
  }
});
