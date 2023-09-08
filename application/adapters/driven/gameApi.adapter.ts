import axios from 'axios'
import Game from '../../core/entities/game.model'
import User from '../../core/entities/user.model'
import IObtainGamesPort from '../../ports/driven/obtainGames.port'
import { ApiConfig } from '../../api.config'
// import AuthService from '../services/auth'

export default class GameApiAdapter implements IObtainGamesPort {
  private access_token: string

  private apiConfig: ApiConfig

  private client_id: string

  private corsAPIURL: string

  constructor(apiConfig: ApiConfig) {
    this.access_token = ''
    this.client_id = ''
    this.apiConfig = apiConfig
    this.corsAPIURL = ''
  }

  provideGames!: () => Promise<Game[]>

  provideGamesById!: (id: string) => Promise<Game[]>

  async getFavoriteGames(): Promise<void> {
    this.access_token = ''
    this.client_id = ''
    this.corsAPIURL = ''
    // Code ici
  }

  async removeFavoriteGames(
    favoriteGamesToRemove: Game[],
    user: User<undefined>
  ): Promise<void> {
    this.access_token = ''
    this.client_id = ''
    this.corsAPIURL = ''
  }

  async addFavoriteGames(
    favoriteGamesToAdd: Game[],
    user: User<undefined>
  ): Promise<void> {
    this.access_token = ''
    this.client_id = ''
    this.corsAPIURL = ''
  }

  async getBestps5Games(): Promise<Game[]> {
    const { accessTokenURL, dataAPIURL, dataFields, authHeaders, corsAPIURL } =
      this.apiConfig
    const tokenResponse = await axios.post(accessTokenURL || '')
    this.access_token = tokenResponse.data.access_token
    this.client_id = authHeaders['Client-ID']
    this.corsAPIURL = corsAPIURL

    const response = await axios.post(corsAPIURL, {
      accessTokenURL,
      dataAPIURL,
      dataFields,
      authHeaders: {
        Authorization: `Bearer ${this.access_token}`,
        'Client-ID': this.client_id
      }
    })
    return response.data.results
  }

  /* async get<T>(path: string, params?: Record<string, any>, config?: any): Promise<T | any> {
    return this.http.get(path, params, config)
  }

  async post<T>(path: string, params?: Record<string, any>, config?: any): Promise<T | any> {
    return this.http.post(path, params, config)
  } */
}
