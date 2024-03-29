import Game from '../../core/entities/game.model'

// Exposer ici les features que je veux soumettre à l'UI ?
export default interface IFetchGamesPort {
  getGames: () => Promise<Game[]>
  getGamesById: (id: string) => Promise<Game[]>
}
