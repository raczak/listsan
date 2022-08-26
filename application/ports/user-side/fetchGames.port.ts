import Game from "../../core/entities/game.model"

// Exposer ici les features que je veux soumettre à l'UI ?
export interface FetchGamesPort {
  getGames: () => Promise<Game[]>
  getGamesById: (id: string) => Promise<Game[]>
}

export default FetchGamesPort
