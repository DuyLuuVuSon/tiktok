export const setHobby = (hobby) => {
  return {
    type:'SET_HOBBY',
    payload:hobby,
  }
}
export const addHobby = (hobbyItem) => {
  return {
    type:'ADD_HOBBY',
    payload:hobbyItem,
  }
}
