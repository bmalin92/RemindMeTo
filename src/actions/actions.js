export const addReminderModal = () => {
  return {
    type: "ADD_REMINDER_MODAL"
  };
};

export const submitReminder = () => {
  return {
    type: "SUBMIT_REMINDER"
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

export const selectType = reminderType => {
  return {
    type: "SELECT_TYPE",
    reminderType
  };
};

export const deselectType = () => {
  return {
    type: "DESELECT_TYPE"
  };
};

export const selectDay = index => {
  return {
    type: "SELECT_DAY",
    index
  };
};

export const typeNotification = notificationText => {
  return {
    type: "TYPE_NOTIFICATION",
    notificationText
  };
};

export const deleteReminder = index => {
  return {
    type: "DELETE_REMINDER",
    index
  };
};
