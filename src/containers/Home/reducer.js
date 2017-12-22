import { HOME_GET } from './actions'

export default function(state = {
  columns: [],
  data: []
}, action) {
  switch (action.type) {
    case HOME_GET:
      return Object.assign({}, state, {
        data: action.data,
        columns: action.columns
      })
    default:
      return state
  }
}