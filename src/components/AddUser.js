import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { GlobalContext } from '../context/GlobalState'

export const AddUser = () => {
  let history = useHistory()

  const { addUser, users } = useContext(GlobalContext)

  // Set up our states.
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 

  // Function to handle form submission.
  const onSubmit = e => {
    
    // Prevent default submission behavior.
    e.preventDefault()

    // New user object.
    const newUser = {
      id: users.length + 1,
      name,
      email,
      password
    }

    // Add new user.
    addUser(newUser)

    // Push the new user into the history.
    history.push('/')
  }

  // Markup
  return (
    <React.Fragment>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form onSubmit={onSubmit}>
          
          {/* User name */}
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              User Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={name}
              onChange={e => setName(e.target.value)}
              type="text"
              placeholder="Enter name"
            />
          </div>

          {/* User email */}
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="text"
              placeholder="Enter email"
            />
          </div>

          {/* User password */}
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="text"
              placeholder="Enter password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Add User
            </button>
          </div>
          <div className="text-center mt-4 text-gray-500">
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}