import axios from 'axios'
import Game from '../core/entities/game.model'
import User from '../core/entities/user.model'
import { Http } from '../ports/http'
import IObtainGamesPort from '../ports/server-side/obtainGames.port'
import AuthService from '../services/auth'

export default class GameApiAdapter implements IObtainGamesPort {
  constructor() {}

  provideGames!: () => Promise<Game[]>

  provideGamesById!: (id: string) => Promise<Game[]>

  getFavoriteGames(): Promise<Game[]> {
    throw new Error('Method not implemented.')
  }

  removeFavoriteGames(
    favoriteGamesToRemove: Game[],
    user: User<undefined>
  ): Promise<void> {
    throw new Error('Method not implemented.')
  }

  addFavoriteGames(
    favoriteGamesToAdd: Game[],
    user: User<undefined>
  ): Promise<void> {
    throw new Error('Method not implemented.')
  }

  async getBestps5Games(): Promise<Game[]> {
    const token = await AuthService.getToken()
    const headers = { Authorization: `Bearer ${token}` }
    const response = await axios.get(
      `https://api.rawg.io/api/games?platforms=24`,
      { headers }
    )
    return response.data.results
  }

  /* async get<T>(path: string, params?: Record<string, any>, config?: any): Promise<T | any> {
    return this.http.get(path, params, config)
  }

  async post<T>(path: string, params?: Record<string, any>, config?: any): Promise<T | any> {
    return this.http.post(path, params, config)
  } */
}
