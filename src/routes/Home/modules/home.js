import { createAction, handleActions } from 'redux-actions'

// ---
// Actions
// ---
export const placeMarker = createAction('PLACE_MARKER')

export const actions = {
  placeMarker
}

// ---
// Initial state
// ---
const initialState = [{
  id: 1,
  expectedX: 6,
  expectedY: 4,
  x: null,
  y: null
}, {
  id: 2,
  expectedX: 2,
  expectedY: 5,
  x: null,
  y: null
}, {
  id: 3,
  expectedX: 1,
  expectedY: 3,
  x: null,
  y: null
}, {
  id: 4,
  expectedX: 6,
  expectedY: 7,
  x: null,
  y: null
}]

// ---
// Reducer
// ---
export default handleActions({
  PLACE_MARKER: (state, action) => state.map((marker) => {
    return marker.id === action.payload.id
      ? { ...marker, x: action.payload.x, y: action.payload.y }
      : marker
  })
}, initialState)
