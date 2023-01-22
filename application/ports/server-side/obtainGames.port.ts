import Game from '../../core/entities/game.model'

export default interface IObtainGamesPort {
  provideGames: () => Promise<Game[]>
  provideGamesById: (id: string) => Promise<Game[]>
  getBestps5Games(): Promise<Game[]>
}
