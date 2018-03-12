export const addReminderModal = () => {
  return {
    type: "ADD_REMINDER_MODAL"
  };
};

export const submitReminder = reminder => {
  return {
    type: "SUBMIT_REMINDER",
    reminder
  };
};

export const editReminderModal = reminder => {
  return {
    type: "EDIT_REMINDER_MODAL",
    reminder
  };
};

export const saveReminder = reminder => {
  return {
    type: "SAVE_REMINDER",
    reminder
  };
};

export const closeModal = () => {
  return {
    type: "CLOSE_MODAL"
  };
};
