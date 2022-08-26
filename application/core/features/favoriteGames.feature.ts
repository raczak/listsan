import Game from "../entities/game.model"
import User from "../entities/user.model"
import { IFavoriteGamesRepository } from "../repositories/favoriteGames.repository"

export class FavoriteGamesFeature {
  constructor(private readonly favoriteGamesRepository: IFavoriteGamesRepository, private user: User) {}

  async getFavoriteGames(): Promise<Game[]> {
    const favoriteGames = await this.favoriteGamesRepository.provideFavoriteGamesByUserId(this.user.id).catch((err) => {
      throw new Error(err)
    })
    return favoriteGames
  }

  async removeFavoriteGames(favoriteGamesToRemove: Game[], user: User) {
    const favoriteGames = await this.favoriteGamesRepository.provideFavoriteGamesByUserId(user.id)
    const favoriteGamesToRemoveIds = favoriteGamesToRemove.map((game) => game.id)
    const favoriteGamesToKeep = favoriteGames.filter((game) => !favoriteGamesToRemoveIds.includes(game.id))
    await this.favoriteGamesRepository.update(favoriteGamesToKeep, user.id)
  }

  async addFavoriteGames(favoriteGamesToAdd: Game[], user: User) {
    const favoriteGames = await this.favoriteGamesRepository.provideFavoriteGamesByUserId(user.id)
    const favoriteGamesToUpdate = [...new Set([...favoriteGames, ...favoriteGamesToAdd])]
    await this.favoriteGamesRepository.update(favoriteGamesToUpdate, user.id)
  }
}
