export const MAKEACTIVE = "MAKEACTIVE";
export const CHANGE_MONTH = "CHANGE_MONTH";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const CHANGE_NEIGHB_NAME = "CHANGE_NEIGHB_NAME";
export const GET_EVENTS_SUCCESS = "GET_EVENTS_SUCCESS";
export const UPDATE_STATE = "UPDATE_STATE";

export const getEventsSuccess = (events) => ({
  type: GET_EVENTS_SUCCESS,
  payload: events,
});
export const makeActive = (id) => ({
  type: MAKEACTIVE,
  payload: id,
});

export const setMonth = (type) => ({
  type: CHANGE_MONTH,
  payload: type,
});

export const rsvpChange = () => ({
  type: UPDATE_STATE,
});

export const changePage = () => ({
  type: CHANGE_PAGE,
});

export const changeNeighborhoodName = (newName) => ({
  type: CHANGE_NEIGHB_NAME,
  payload: newName,
});
