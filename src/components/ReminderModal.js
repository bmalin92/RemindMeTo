import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Picker,
  TextInput
} from "react-native";
import { connect } from "react-redux";
import { closeModal } from "../actions";
import TypePicker from "./TypePicker";

class ReminderModal extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     reminderType: "",
  //     reminderText: ""
  //   };
  //   this.saveReminder = this.props.saveReminder.bind(this);
  // }

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          style={styles.modal}
          visible={this.props.modalVisible}
          onRequestClose={this.props.closeModal}
        >
          <TouchableWithoutFeedback onPress={this.props.closeModal}>
            <View style={styles.modal}>
              <TouchableWithoutFeedback>
                <View style={styles.modalView}>
                  <Text style={styles.modalHeader}>
                    {this.props.modalTitle}
                  </Text>

                  <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Type</Text>
                    <TextInput
                      style={styles.textInput}
                      // onChangeText={reminderType =>
                      //   this.setState({ reminderType })
                      // }
                      value={this.props.reminder.reminderType}
                      placeholder="Do this task!"
                      placeholderTextColor="grey"
                      underlineColorAndroid="transparent"
                    />
                  </View>

                  <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Notification Text</Text>
                    <TextInput
                      style={styles.textInput}
                      // onChangeText={reminderText =>
                      //   this.setState({ reminderText })
                      // }
                      value={this.props.reminder.reminderText}
                      placeholder="Do this task!"
                      placeholderTextColor="grey"
                      underlineColorAndroid="transparent"
                    />
                  </View>

                  <View style={styles.completeReminderContainer}>
                    <TouchableOpacity style={styles.completeReminder}>
                      <Text style={styles.completeReminderText}>
                        {this.props.modalButton}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    );
  }

  // saveReminder() {
  //   if (this.state.reminderText) {
  //     let d = new Date();
  //     this.state.reminderArray.push({
  //       date: d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
  //       reminder: this.state.reminderText
  //     });
  //     this.setState({ modalVisible: false });
  //     this.setState({ reminderArray: this.state.reminderArray });
  //     this.setState({ reminderText: "" });
  //   }
  // }
  // changeReminderType = text => {
  //   this.setState({ reminderType: text });
  // };

  // changeReminderText = text => {
  //   this.setState({ reminderText: text });
  // };
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "#00000025",
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
    color: "white",
    backgroundColor: "#1966D2",
    fontSize: 24,
    paddingVertical: 10,
    alignItems: "stretch",
    textAlign: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 2,
    shadowColor: "#000000",
    shadowRadius: 50,
    shadowOpacity: 0.5
  },
  modalView: {
    width: 360,
    height: 360,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 25,
    shadowColor: "#000000",
    shadowRadius: 50,
    shadowOpacity: 0.75
  },
  sectionContainer: {
    flexDirection: "row",
    padding: 15
  },
  sectionTitle: {
    fontSize: 18
  },
  textInput: {
    paddingHorizontal: 15
  },
  completeReminderContainer: {
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
  }
});

function mapStateToProps(state) {
  return {
    reminder: state.reminder,
    modalVisible: state.modalVisible,
    modalTitle: state.modalTitle,
    modalButton: state.modalButton
  };
}

export default connect(mapStateToProps, { closeModal })(ReminderModal);
