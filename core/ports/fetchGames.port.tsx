import Game from "../entities/game.model"

export interface FetchGames {
  getGames: () => Promise<Game[]>
  getGamesById: (id: string) => Promise<Game[]>
}
