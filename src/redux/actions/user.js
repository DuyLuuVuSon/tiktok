// 1
export const setNewUser = (user) => {
  return {
    type:'SET_USER',
    payload:user,
  }
}

export const addNewUser = (user) => {
  return {
    type:'ADD_USER',
    payload:user,
  }
}
