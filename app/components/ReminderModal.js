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
import TypePicker from "./TypePicker";

export default class ReminderModal extends React.Component {
  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          style={styles.modal}
          visible={this.props.visible}
          onRequestClose={this.props.closeModal}
        >
          <TouchableWithoutFeedback onPress={this.props.closeModal}>
            <View style={styles.modal}>
              <TouchableWithoutFeedback>
                <View style={styles.modalView}>
                  <Text style={styles.modalHeader}>
                    {this.props.modalTitle}
                  </Text>

                  <TypePicker style={styles.TypePicker} />

                  <Text style={styles.sectionTitle}>Notification Text</Text>
                  <TextInput
                    style={styles.textInput}
                    onChangeText={text => this.props.changeText(text)}
                    value={this.props.reminderText}
                    placeholder="Do this task!"
                    placeholderTextColor="grey"
                    underlineColorAndroid="transparent"
                  />

                  <View style={styles.completeReminderContainer}>
                    <TouchableOpacity
                      style={styles.completeReminder}
                      onPress={this.props.saveReminder}
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
    fontSize: 24,
    margin: 20,
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#ddd"
  },
  modalView: {
    width: 360,
    height: 500,
    borderRadius: 10,
    backgroundColor: "white"
  },
  sectionTitle: {
    fontSize: 18,
    width: 180,
    alignSelf: "center",
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  textInput: {
    paddingHorizontal: 50,
    textAlign: "center"
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
  }
});
