const ADD_PLATE_EVENT = 'calendar/addEvent';
const LOAD_EVENTS = 'calendar/loadEvents';
const DELETE_PLATE_EVENT = 'calendar/deleteEvent';

export const addPlateEvent = (plateEvent) => {
	return {
		type: ADD_PLATE_EVENT,
		payload: plateEvent,
	};
};

export const loadEvents = (plateEvents) => {
	return {
		type: LOAD_EVENTS,
		payload: plateEvents,
	};
};

export const deletePlateEvent = (plateEvent) => {
	return {
		type: DELETE_PLATE_EVENT,
		payload: plateEvent,
	};
};

export const addPlateToCalendar =
	(title, userId, date, plateId, url) => async (dispatch) => {
		const response = await fetch(`/api/plates/calendar`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title: title,
				user_id: userId,
				date: date,
				plate_id: plateId,
				url: url,
			}),
		});
		const plateEvent = await response.json();
		dispatch(addPlateEvent(plateEvent));
		return plateEvent;
	};

export const loadUserEvents = (userId) => async (dispatch) => {
	const response = await fetch(`/api/plates/calendar/${userId}`, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
	const plateEvents = await response.json();
	dispatch(loadEvents(plateEvents));
	return plateEvents;
};

export const deletePlateFromCalendar = () => {
	//
};

const calendarReducer = (state = {}, action) => {
	let newState = { ...state };
	switch (action.type) {
		case ADD_PLATE_EVENT:
			newState[action.payload.id] = action.payload;
			return newState;
		case LOAD_EVENTS:
			newState = action.payload;
			return newState;
		case DELETE_PLATE_EVENT:
			delete newState[action.payload.id];
			return newState;
		default:
			return state;
	}
};

export default calendarReducer;
