import * as actions from "../actions/actions";

const initialState = {
  reminderArray: [],
  reminderType: "",
  reminderDays: [
    { day: "Su", active: false },
    { day: "Mo", active: false },
    { day: "Tu", active: false },
    { day: "We", active: false },
    { day: "Th", active: false },
    { day: "Fr", active: false },
    { day: "Sa", active: false }
  ],
  reminderFrequency: "1 hour",
  reminderText: "",
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
        reminderArray: [
          ...state.reminderArray,
          {
            reminderType: state.reminderType,
            reminderText: state.reminderText,
            reminderDays: state.reminderDays,
            reminderFrequency: state.reminderFrequency
          }
        ],
        reminderType: initialState.reminderType,
        reminderText: initialState.reminderText,
        reminderDays: initialState.reminderDays,
        reminderFrequency: initialState.reminderFrequency
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
        reminderType: initialState.reminderType,
        reminderText: initialState.reminderText
      });

    case "CLOSE_MODAL":
      return Object.assign({}, state, {
        modalVisible: false,
        reminderType: initialState.reminderType,
        reminderText: initialState.reminderText,
        reminderDays: initialState.reminderDays,
        reminderFrequency: initialState.reminderFrequency
      });

    case "SELECT_TYPE":
      return Object.assign({}, state, {
        reminderType: action.reminderType,
        reminderText: state.reminderText
      });

    case "DESELECT_TYPE":
      return Object.assign({}, state, {
        reminderType: initialState.reminderType,
        reminderText: state.reminderText
      });

    case "SELECT_DAY":
      return Object.assign({}, state, {
        reminderDays: [
          ...state.reminderDays.slice(0, action.index),
          {
            active: !state.reminderDays[action.index].active,
            day: state.reminderDays[action.index].day
          },
          ...state.reminderDays.slice(action.index + 1)
        ]
      });

    case "CHOOSE_FREQUENCY":
      return Object.assign({}, state, {
        reminderFrequency: action.frequency
      });

    case "TYPE_NOTIFICATION":
      return Object.assign({}, state, {
        reminderType: state.reminderType,
        reminderText: action.notificationText
      });

    case "DELETE_REMINDER":
      return Object.assign({}, state, {
        reminderArray: [
          ...state.reminderArray.slice(0, action.index),
          ...state.reminderArray.slice(action.index + 1)
        ]

        // state.reminderArray.filter(reminder => {
        //   return reminder.key !== action.index;
        // })
      });

    default:
      return state;
  }
};
