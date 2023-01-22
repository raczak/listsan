import Game from './game.model'

// <userType = undefined> allow me to different type of users: like admin so "User<adminUser>"
export default class User<userType = undefined> {
  id!: number

  pseudo!: string

  email?: Email

  favoriteGames!: Game[]

  preferences!: Preferences

  userType!: userType
}

interface Email {
  address: string
  verified: boolean
}

interface Preferences {
  consoles: string[]
  games: string[]
  notifications: Notification
}

interface Notification {
  email: boolean
  push: boolean
  email_frequency: string
  push_frequency: string
}
