export default function hobbyReducer(state ={list:['football','music'],hobbyItem:''} , action) {
    switch (action.type) {
        case 'SET_HOBBY':
        return {...state,hobbyItem:action.payload}
        case 'ADD_HOBBY':
        return {...state,list:[...state.list,action.payload]}
      default:
        return state
    }
}
