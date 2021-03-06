const SAVE_PLATE = "plate/savePlate";
const LOAD_PLATES = "plate/loadPlates"


export const savePlate= (plate) => {
  return {
    type: SAVE_PLATE,
    payload: plate,
  };
};

export const loadPlates = (plates) => {
  return {
    type: LOAD_PLATES,
    payload: plates
  }
}

export const saveUserPlate = (proteinId, carbsId, fruitId, vegetableId, dairyId, serving, userId) => async (dispatch) => {
  const response = await fetch('/api/plates/', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      protein_id: proteinId,
      carbs_id: carbsId,
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

export const loadUserPlates = (userId) => async (dispatch) => {
  console.log('load user plate thunk start')
  const response = await fetch(`/api/plates/${userId}`, {
    headers: {
      "Content-Type": "application/json",
    }
  })
  const plates = await response.json();
  dispatch(loadPlates(plates))
  console.log('the plates', plates)
  return plates;
}


const plateReducer = (state = { }, action) => {
  let newState = { ...state };
  switch (action.type) {
    case SAVE_PLATE:
      newState[action.payload.id] = action.payload;
      return newState;
    case LOAD_PLATES:
      newState = action.payload;
      return newState;
    default:
      return state;
  }
};

export default plateReducer;
