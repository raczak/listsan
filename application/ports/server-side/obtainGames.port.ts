import Game from "../../core/entities/game.model"

export interface IObtainGamesPort {
  provideGames: () => Promise<Game[]>
  provideGamesById: (id: string) => Promise<Game[]>
}

export default IObtainGamesPort
