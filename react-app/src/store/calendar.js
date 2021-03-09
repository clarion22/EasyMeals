const ADD_PLATE_EVENT = 'calendar/addEvent';

export const addPlateEvent = (plateEvent) => {
  return {
    type: 'ADD_PLATE_EVENT',
    payload: plateEvent,
  }
}

export const addPlateToCalendar = (title, userId, date, plateId) => async (dispatch) => {
  const response = await fetch(`/api/plates/${userId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      //write content after creating flask route
    }),
  })
  const plateEvent = await response.json();
  dispatch(addPlateEvent(plateEvent))
  return plateEvent;
}


const calendarReducer = (state = { }, action) => {
  let newState = { ...state };
  switch (action.type) {
    case ADD_PLATE_EVENT:
      newState[action.payload.id] = action.payload;
      return newState;
    default:
      return state;
  }
};

export default calendarReducer;
