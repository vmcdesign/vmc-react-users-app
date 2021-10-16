import React, { createContext, useReducer } from 'react'

import appReducer from './AppReducer'

// Set our initial state, which is a list of users.
const initialState = {
  users: [
    {
      id: 1,
      name: 'Vanessa Coles',
      email: 'vmcolesdesign@gmail.com',
      password: 'ilovereact12345!'
    }
  ]
}

// Create our GLobal Context, accessible from any point in our app.
export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  // Dispatch the 'ADD_USER' action to add a user.
  function addUser(user) {
    dispatch({
      type: 'ADD_USER',
      payload: user
    })
  }

  // Dispatch the 'EDIT_USER' action to edit a user.
  function editUser(user) {
    dispatch({
      type: 'EDIT_USER',
      payload: user
    })
  }

  // Dispatch the 'REMOVE_USER' action to add a user.
  function removeUser(id) {
    dispatch({
      type: 'REMOVE_USER',
      payload: id
    })
  }

  return (
    // Expose users, addUser, editUser, and removeUser to the Global context.
    <GlobalContext.Provider value={{
      users: state.users,
      addUser,
      editUser,
      removeUser
    }}>
      {children}
    </GlobalContext.Provider>
  )
}