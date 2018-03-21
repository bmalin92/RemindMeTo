import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
  TouchableWithoutFeedback,
  Picker,
  TextInput
} from "react-native";
import { connect } from "react-redux";
import { closeModal, typeNotification, submitReminder } from "../actions";
import TypeSelection from "./TypeSelection";
import DaySelection from "./DaySelection";

class ReminderModal extends React.Component {
  _typeNotification = notificationText => {
    this.props.typeNotification(notificationText);
  };

  _submitReminder = () => {
    if (this.props.reminderText !== "" && this.props.reminderType !== "") {
      this.props.submitReminder();
      this.props.closeModal();
    }
  };

  render() {
    let days = this.props.reminderDays.map((day, key) => {
      return <DaySelection key={key} index={key} day={day} />;
    });

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

                  <View style={styles.mainContent}>
                    <View style={styles.typeContainer}>
                      <TypeSelection title={"Fluids"} />
                      <TypeSelection title={"Actions"} />
                      <TypeSelection title={"Meds"} />
                    </View>

                    <View style={styles.dayContainer}>{days}</View>

                    <View style={styles.notificationContainer}>
                      <Text style={styles.notificationTitle}>
                        Notification Text
                      </Text>
                      <TextInput
                        style={styles.textInput}
                        // onChangeText={reminderText =>
                        //   this.setState({ reminderText })
                        // }
                        onChangeText={notificationText =>
                          this._typeNotification(notificationText)
                        }
                        value={this.props.reminderText}
                        placeholder="Do this task!"
                        placeholderTextColor="grey"
                        underlineColorAndroid="transparent"
                      />
                    </View>

                    <TouchableOpacity
                      style={styles.completeReminder}
                      onPress={() => this._submitReminder()}
                    >
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
    shadowOpacity: 0.75,
    flexDirection: "column"
  },
  mainContent: {
    flex: 1,
    padding: 15,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-between"
  },
  typeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 10
  },
  dayContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    padding: 5,
    borderRadius: 10
  },
  notificationContainer: {
    flexDirection: "column",
    alignItems: "center"
  },
  notificationTitle: {
    fontSize: 18
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    width: 300,
    alignItems: "flex-start",
    paddingHorizontal: 10
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
    reminderType: state.reminderType,
    reminderDays: state.reminderDays,
    reminderText: state.reminderText,
    modalVisible: state.modalVisible,
    modalTitle: state.modalTitle,
    modalButton: state.modalButton
  };
}

export default connect(mapStateToProps, {
  closeModal,
  typeNotification,
  submitReminder
})(ReminderModal);
