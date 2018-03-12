import * as actions from "../actions/actions";

const initialState = {
  reminderArray: [],
  reminder: {
    reminderType: "",
    reminderText: ""
  },
  modalVisible: false,
  modalTitle: "",
  modalButton: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_REMINDER_MODAL":
      return Object.assign({}, state, {
        modalVisible: true,
        modalTitle: "Add a Reminder",
        modalButton: "Add Reminder"
      });

    case "SUBMIT_REMINDER":
      return Object.assign({}, state, {
        reminderArray: [state.reminderArray, action.reminder],
        reminder: {
          reminderType: "",
          reminderText: ""
        }
      });

    case "EDIT_REMINDER_MODAL":
      return Object.assign({}, state, {
        modalVisible: true,
        modalTitle: "Edit Reminder",
        modalButton: "Save",
        reminder: action.reminder
      });

    case "SAVE_REMINDER":
      return Object.assign({}, state, {
        reminderArray: [state.reminderArray, action.reminder],
        reminder: {
          reminderType: "",
          reminderText: ""
        }
      });

    case "CLOSE_MODAL":
      return Object.assign({}, state, {
        modalVisible: false
      });

    default:
      return state;
  }
};
