export default function userReducer(state = {listUsers:[],userSet:''}, action) {
    switch (action.type) {
      case 'SET_USER':
        return {...state,userSet:action.payload}
      case 'ADD_USER':
        return {...state,listUsers:[...state.listUsers,action.payload]}
      default:
        return state
    }
}
