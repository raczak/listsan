import FavoriteGames from "../entities/favoriteGames.model"

export class FavoriteGamesFeature {
  constructor(
    private readonly fetchUsersPort: FetchUsersPort,
    private readonly fetchGamesPort: FetchGamesPort,
    private readonly favoriteGamesRepository: FavoriteGamesRepository
  ) {}

  async getFavoriteGames(userId: string): Promise<FavoriteGames[]> {
    const favoriteGames = await this.favoriteGamesRepository.getFavoriteGames(
      userId
    )
    return favoriteGames
  }
}
