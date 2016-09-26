import { createAction, handleActions } from 'redux-actions'
import { combineReducers } from 'redux'

// ---
// Actions
// ---
export const validate = () => {
  return (dispatch, getState) => {
    console.log(getState().home.markers)
    const isValid = getState().home.markers.every(m => m.x === m.expectedX && m.y === m.expectedY)

    dispatch(showValidation(isValid))
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(hideValidation())
        resolve()
      }, 1000)
    })
  }
}

export const showValidation = createAction('SHOW_VALIDATION')
export const hideValidation = createAction('HIDE_VALIDATION')
export const placeMarker = createAction('PLACE_MARKER')

// Export actions
export const actions = {
  placeMarker,
  validate
}

// ---
// Markers
// ---
const initialMarkers = [{
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

const initialValidation = {
  isValid: false,
  isShown: false
}

// ---
// Reducer
// ---

// Markers
const markers = handleActions({
  PLACE_MARKER: (state, action) => state.map((marker) => {
    return marker.id === action.payload.id
      ? { ...marker, x: action.payload.x, y: action.payload.y }
      : marker
  })
}, initialMarkers)

// Validation
const validation = handleActions({
  SHOW_VALIDATION: (state, action) => ({isShown: true, isValid: action.payload}),

  HIDE_VALIDATION: (state, action) => ({...state, isShown: false})
}, initialValidation)

export default combineReducers({
  markers,
  validation
})