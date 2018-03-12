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
import { connect } from "react-redux";
import { addReminderModal } from "../actions";
import Reminder from "./Reminder";
import ReminderModal from "./ReminderModal";
// import TypePicker from "./TypePicker";

class Main extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     reminderArray: [],
  //     reminderType: "",
  //     reminderText: "",
  //     modalVisible: false,
  //     modalTitle: "",
  //     modalButton: ""
  //   };
  //   this.saveReminder = this.saveReminder.bind(this);
  //   this.closeModal = this.closeModal.bind(this);
  // }

  render() {
    // const dispatch = this.props.dispatch;

    // addReminder = event => {
    //   dispatch.addReminderModal();
    // };

    // let reminders = this.state.reminderArray.map((val, key) => {
    //   return (
    //     <Reminder
    //       key={key}
    //       keyval={key}
    //       val={val}
    //       deleteMethod={() => this.deleteReminder(key)}
    //     />
    //   );
    // });

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Remind Me To...</Text>
        </View>

        <ReminderModal
        // visible={this.state.modalVisible}
        // saveReminder={this.saveReminder}
        // modalTitle={this.state.modalTitle}
        // closeModal={this.closeModal}
        // modalButton={this.state.modalButton}
        />

        <ScrollView style={styles.scrollContainer}>
          {/* {reminders} */}
        </ScrollView>

        <TouchableOpacity
          // onPress={this.addModal.bind(this)}
          onPress={this.props.addReminderModal}
          style={styles.addButton}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // addModal() {
  //   this.setState({
  //     modalTitle: "Add a Reminder",
  //     modalButton: "ADD REMINDER",
  //     modalVisible: true
  //   });
  // }

  // editModal() {
  //   this.setState({
  //     modalTitle: "Edit Reminder",
  //     modalButton: "SAVE",
  //     modalVisible: true
  //   });
  // }

  // closeModal() {
  //   this.setState({
  //     modalVisible: false
  //   });
  // }

  // changeReminderType = text => {
  //   this.setState({ reminderType: text });
  // };

  // changeReminderText = text => {
  //   this.setState({ reminderText: text });
  // };

  // saveReminder(text, type) {
  //   if (this.state.reminderText) {
  //     let d = new Date();
  //     this.state.reminderArray.push({
  //       date: d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
  //       reminder: { text }
  //     });
  //     this.setState({ modalVisible: false });
  //     this.setState({ reminderArray: this.state.reminderArray });
  //     this.setState({ reminderText: "" });
  //   }
  // }

  // deleteReminder(key) {
  //   this.state.reminderArray.splice(key, 1);
  //   this.setState({ reminderArray: this.state.reminderArray });
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: "#1966D2",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000000",
    shadowRadius: 50,
    shadowOpacity: 0.5
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
  },
  typePicker: {
    width: 100,
    paddingHorizontal: 20
  }
});

function mapStateToProps(state) {
  return {
    reminderArray: state.reminderArray
  };
}

export default connect(mapStateToProps, { addReminderModal })(Main);
