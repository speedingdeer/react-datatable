import { HOME_GET } from './actions'

export default function(state = {}, action) {
  switch (action.type) {
    case HOME_GET:
      return Object.assign({}, state, {
        data: action.data
      })
    default:
      return state
  }
}