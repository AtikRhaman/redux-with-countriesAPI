// action

export const addOne = {
  type: "ADD_ONE"
};

export const minusOne = {
  type: "MINUS_ONE"
};

export const changeName = {
  type: "CHANGE_NAME"
  // payload: {
  //   name: newName
  // }
};
export const changeBackgroundColor = {
  type: "CHANGE_COLOR"
};
export const selectBook = index => ({
  type: "SELECT_BOOK",
  payload: {
    index: index
  }
});
