import Game from '../../core/entities/game.model'
import IFetchGamesPort from '../../ports/driving/fetchGames.port'
import ListSan from '../../core/main'

export default class GameAdapter implements IFetchGamesPort {
  private static instance: GameAdapter

  private core: ListSan

  constructor(core: ListSan) {
    if (!core) {
      throw new Error('A ListSan instance is required for GameAdapter')
    }
    this.core = core
  }

  public static getInstance(core: ListSan): GameAdapter {
    if (!GameAdapter.instance) {
      GameAdapter.instance = new GameAdapter(core)
    }
    return GameAdapter.instance
  }

  async getGames(): Promise<Game[]> {
    if (!this.core.gameAdapter) {
      throw new Error('GameAdapter is not implemented in ListSan')
    }
    return this.core.gameAdapter.getBestps5Games()
  }

  async getGamesById(id: string): Promise<Game[]> {
    if (!this.core.gameAdapter) {
      throw new Error('GameAdapter is not implemented in ListSan')
    }
    return this.core.gameAdapter.provideGamesById(id)
  }
}
