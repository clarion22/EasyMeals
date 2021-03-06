const SAVE_PLATE = "plate/savePlate";

export const savePlate = (plate) => {
  return {
    type: SAVE_PLATE,
    payload: plate,
  };
};

export const saveUserPlate = () => async (dispatch) => {
  const response = await fetch('/api/plates', {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const plate = await response.json();
  dispatch(savePlate(plate));
  return plate;
}


const plateReducer = (state = { }, action) => {
  let newState = { ...state };
  switch (action.type) {
    case SAVE_PLATE:
      newState.user = action.payload;
      return newState;
    default:
      return state;
  }
};

export default plateReducer;
