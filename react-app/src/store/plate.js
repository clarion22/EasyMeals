const SAVE_PLATE = "plate/savePlate";
const LOAD_PLATES = "plate/loadPlates";
const REMOVE_PLATE = "plate/removePlate";

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

export const removePlate = (plate) => {
  return {
    type: REMOVE_PLATE,
    payload: plate,
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

export const deletePlate = (plateId) => async (dispatch) => {
  const response = await fetch(`/api/plates/user/${plateId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    }
  })
  const plate = await response.json();
  dispatch(removePlate(plate))
  return plate;
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
    case REMOVE_PLATE:
      delete newState[action.payload.id]
      return newState
    default:
      return state;
  }
};

export default plateReducer;
