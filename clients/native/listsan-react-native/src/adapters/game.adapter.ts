import Game from "../../../../../application/core/entities/game.model"
import FetchGamesPort from "../../../../../application/ports/user-side/fetchGames.port"
import ListSan from "../../../../../application/core/main"

export default class GameAdapter implements FetchGamesPort {
  core: ListSan
  constructor(core: ListSan) {
    this.core = core
  }
  async getGames(): Promise<Game[]> {
    return this.core.gameAdapter.provideGames()
  }
  async getGamesById(id: string): Promise<Game[]> {
    return this.core.gameAdapter.provideGamesById(id)
  }
}
