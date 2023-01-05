import Game from "../../../../../application/core/entities/game.model"
import FetchGamesPort from "../../../../../application/ports/user-side/fetchGames.port"
import ListSan from "../../../../../application/core/main"

export default class GameAdapter implements FetchGamesPort {
  private static instance: GameAdapter
  static core: ListSan

  constructor(core: ListSan) {
    GameAdapter.core = core
  }

  public static getInstance(): GameAdapter {
    if (!GameAdapter.instance) {
      GameAdapter.instance = new GameAdapter(GameAdapter.core)
    }
    return GameAdapter.instance
  }

  async getGames(): Promise<Game[]> {
    return GameAdapter.core.gameAdapter.provideGames()
  }

  async getGamesById(id: string): Promise<Game[]> {
    return GameAdapter.core.gameAdapter.provideGamesById(id)
  }
}
