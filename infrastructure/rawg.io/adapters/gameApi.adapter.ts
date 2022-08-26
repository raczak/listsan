import Game from "../../../application/core/entities/game.model"
import User from "../../../application/core/entities/user.model"
import { Http } from "../../../application/ports/http"
import IObtainGamesPort from "../../../application/ports/server-side/obtainGames.port"

export default class GameApiAdapter implements IObtainGamesPort {
  constructor() {}
  provideGames!: () => Promise<Game[]>
  provideGamesById!: (id: string) => Promise<Game[]>

  getFavoriteGames(): Promise<Game[]> {
    throw new Error("Method not implemented.")
  }
  removeFavoriteGames(favoriteGamesToRemove: Game[], user: User<undefined>): Promise<void> {
    throw new Error("Method not implemented.")
  }
  addFavoriteGames(favoriteGamesToAdd: Game[], user: User<undefined>): Promise<void> {
    throw new Error("Method not implemented.")
  }

  /*async get<T>(path: string, params?: Record<string, any>, config?: any): Promise<T | any> {
    return this.http.get(path, params, config)
  }

  async post<T>(path: string, params?: Record<string, any>, config?: any): Promise<T | any> {
    return this.http.post(path, params, config)
  }*/
}
