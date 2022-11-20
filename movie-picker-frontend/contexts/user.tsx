import React, { ReactNode } from 'react'
import usersData from '../data/users.js'
import ratingData from '../data/ratings.js'
import reviewsData from '../data/reviews.js'
import { Notification } from '../models/notification.js'
import { User } from '../models/user.js'

interface storeType {
  users: User[],
  currentUser: User | null,
  notifications: Notification[],
  getUser: (userId: number) => User | undefined
}

export const userContext = React.createContext<storeType>(
  {
    users: [],
    currentUser: null,
    notifications: [],
    getUser: () => undefined,
  }
)

const getNotifications = () : Notification[] => {
  const items : Notification[] = []
  Array.prototype.push.apply(items, reviewsData)
  Array.prototype.push.apply(items, ratingData)
  return items.sort((a: Notification, b: Notification) => { return (a.date < b.date) ? 1 : ((a.date > b.date) ? -1 : 0) })
}

export default ({ children } : { children: ReactNode }) => {
  const [users, setUsers] = React.useState(usersData)
  const [currentUser, setCurrentUser] = React.useState(usersData[0])
  const [notifications, setNotifications] = React.useState(getNotifications())

  const getUser = (userId: number): User | undefined => {
    return users.find(user => user.id == userId)
  }

  const store = {
    users,
    currentUser,
    notifications,
    getUser,
  }

  return (
      <userContext.Provider value={store}>
        { children }
      </userContext.Provider>
    )
  }
