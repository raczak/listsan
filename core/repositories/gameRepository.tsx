import Game from "../entities/game.model"

export interface GameRepository {
  getGames: () => Promise<Game[]>
  getGamesById: (id: string) => Promise<Game[]>
}
