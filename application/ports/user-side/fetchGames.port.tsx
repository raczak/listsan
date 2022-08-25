import Game from "../../core/entities/game.model"

export interface FetchGamesPort {
  getGames: () => Promise<Game[]>
  getGamesById: (id: string) => Promise<Game[]>
}

export default FetchGamesPort
