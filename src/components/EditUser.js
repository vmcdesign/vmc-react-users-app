import React, { useState, useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { GlobalContext } from '../context/GlobalState';

export const EditUser = route => {
  let history = useHistory();

  const { users, editUser } = useContext(GlobalContext);

  // Set up our states.
  const [selectedUser, setSelectedUser] = useState({
    id: null,
    name: '',
    email: '',
    password: '',
  });

  const currentUserId = route.match.params.id;

  useEffect(() => {
    // Set the user ID to the current user ID.
    const userId = currentUserId;
    
    // Find the selected user's ID.
    const selectedUser = users.find(
      (currentUserTraversal) => currentUserTraversal.id === parseInt(userId)
    );

    // Set the selexted user.
    setSelectedUser(selectedUser);
  }, [currentUserId, users]);

  // Function to handle form submission.
  const onSubmit = (e) => {
    e.preventDefault();

    editUser(selectedUser);
    
    history.push('/');
  };

  // Function to handle form input change.
  const handleOnChange = (userKey, newValue) =>
    setSelectedUser({ ...selectedUser, [userKey]: newValue });

  if (!selectedUser || !selectedUser.id) {
    return <div>Invalid User ID.</div>;
  }

  return (
    <React.Fragment>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form onSubmit={onSubmit}>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name of user
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedUser.name}
              onChange={(e) => handleOnChange("name", e.target.value)}
              type="text"
              placeholder="Enter name"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedUser.email}
              onChange={(e) => handleOnChange("email", e.target.value)}
              type="text"
              placeholder="Enter email"
            />
          </div>
          <div className="w-full  mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
              value={selectedUser.password}
              onChange={(e) => handleOnChange("password", e.target.value)}
              type="text"
              placeholder="Enter password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
              Edit User
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