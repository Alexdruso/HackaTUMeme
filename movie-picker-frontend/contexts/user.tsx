import React, { ReactNode } from 'react'
import usersData from '../data/users.js'
import { User } from '../models/user.js'

interface storeType {
  users: User[],
  currentUser: User,
}

export const StoreContext = React.createContext<storeType | null>(null)

export default ({ children } : { children: ReactNode }) => {
  const [users, setUsers] = React.useState(usersData)
  const [currentUser, setCurrentUser] = React.useState(usersData[0])

  const store = {
    users,
    currentUser,
  }

  return (
      <StoreContext.Provider value={store}>
        { children }
      </StoreContext.Provider>
    )
  }
