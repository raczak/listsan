import Game from "../../entities/game.model"

export interface FetchGamesPort {
  getGames: () => Promise<Game[]>
  getGamesById: (id: string) => Promise<Game[]>
}

export default FetchGamesPort
