const SAVE_PLATE = "plate/savePlate";

export const savePlate = (plate) => {
  return {
    type: SAVE_PLATE,
    payload: plate,
  };
};

export const saveUserPlate = (proteinId, carbId, fruitId, vegetableId, dairyId, serving, userId) => async (dispatch) => {
  const response = await fetch('/api/plates/', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      protein_id: proteinId,
      carb_id: carbId,
      fruit_id: fruitId,
      vegetables_id: vegetableId,
      dairy_id: dairyId,
      serving: serving,
      user_id: userId,
    }),
  });
  const plate = await response.json();
  dispatch(savePlate(plate));
  return plate;
}


const plateReducer = (state = { }, action) => {
  let newState = { ...state };
  switch (action.type) {
    case SAVE_PLATE:
      newState = action.payload;
      return newState;
    default:
      return state;
  }
};

export default plateReducer;