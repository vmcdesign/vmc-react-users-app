/**
 * Define our CRUD actions.
 * 
 * @param {*} state 
 * @param {*} action  
 */
export default function appReducer(state, action) {
  switch(action.type) {

    // Takes a payload value containing new users, and returns the updated employee state.
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload]
      }

    // Takes payload value and compares the id with the users, if it finds a match,
    // it will use the new payload values and return the updated user state.
    case 'EDIT_USER':
      const updatedUser = action.payload

      const updatedUsers = state.users.map(user => {
        if (user.id === updatedUser.id) { 
          return updatedUser }
        return user 
      })

      // Takes a payload value and compares the id with the users.  If it finds a match,
      // it will remove that user and return the updated user state.
      return {
        ...state,
        users: updatedUsers
      }
    
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      }

    default:
      return state
  }
}