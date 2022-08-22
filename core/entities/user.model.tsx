import Game from "./game.model"

export class User {
  id: number
  pseudo: string
  email?: Email
  favoriteGames: Game[]
  preferences: Preferences
}

interface Email {
  address: string
  verified: boolean
}

interface Preferences {
  consoles: string[]
  games: string[]
}

export default User
