const SAVE_PLATE = "plate/savePlate";
const LOAD_PLATES = "plate/loadPlates";
const REMOVE_PLATE = "plate/removePlate";
const FAVORITE_PLATE = "plate/favoritePlate";
const LOAD_FAVORITES = "plate/loadFavoritePlates"

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

export const favoritePlate = (plate) => {
  return {
    type: FAVORITE_PLATE,
    payload: plate,
  }
}

export const loadFavoritePlates = (plates) => {
  return {
    type: LOAD_FAVORITES,
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

export const addPlateToFavorite = (plateId) => async (dispatch) => {
  const response = await fetch(`/api/plates/user/${plateId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    }
  })
  const plate = await response.json();
  dispatch(favoritePlate(plate))
  return plate;
}

export const loadUserFavoritePlates = (userId) => async (dispatch) => {
  const response = await fetch(`/api/plates/user/favorite/${userId}`,
  {
    headers: {
      "Content-Type": "application/json",
    }
})
 const plates = await response.json();
 dispatch(loadFavoritePlates(plates))
 return plates;
}

const plateReducer = (state = { all: {}, favorite: {}}, action) => {
  let newState = { ...state };
  switch (action.type) {
    case SAVE_PLATE:
      newState.all[action.payload.id] = action.payload;
      return newState;
    case LOAD_PLATES:
      newState.all = action.payload;
      return newState;
    case REMOVE_PLATE:
      delete newState.all[action.payload.id]
      if (newState.favorite[action.payload.id]) delete newState.favorite[action.payload.id]
      return newState
    case FAVORITE_PLATE:
      newState.favorite[action.payload.id] = action.payload;
      return newState;
    case LOAD_FAVORITES:
      newState.favorite = action.payload;
      return newState;
    default:
      return state;
  }
};

export default plateReducer;
