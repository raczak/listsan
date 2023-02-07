import axios from 'axios'
import Game from '../../core/entities/game.model'
import User from '../../core/entities/user.model'
import { Http } from '../../ports/http'
import IObtainGamesPort from '../../ports/driven/obtainGames.port'
// import AuthService from '../services/auth'

export default class GameApiAdapter implements IObtainGamesPort {
  private access_token: string

  private client_id: string

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
    console.log('lolollo')
    // const token = '1e1e4261198043149952843804fbbf66'
    // await AuthService.getToken()
    const auth = await axios.post(
      'https://id.twitch.tv/oauth2/token?client_id=lrfyt3y7lw1ygbs0gq60cescdxgamp&client_secret=pkyv33qogabm0rdpo6j5ps8vrhzajf&grant_type=client_credentials'
    )
    // add corss origin
    const { access_token } = auth.data
    this.access_token = access_token
    const headers = {
      Authorization: `Bearer ${this.access_token}`,
      Client_ID: this.client_id,
      Body: 'fields *;',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'privatekey'
    }
    const response = await axios.post(
      `https://cors-anywhere.herokuapp.com/{https://api.igdb.com/v4/games}`
    )
    console.log(response)

    return response.data.results
  }

  /* async get<T>(path: string, params?: Record<string, any>, config?: any): Promise<T | any> {
    return this.http.get(path, params, config)
  }

  async post<T>(path: string, params?: Record<string, any>, config?: any): Promise<T | any> {
    return this.http.post(path, params, config)
  } */
}
