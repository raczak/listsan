export class UserPreferences {
  constructor(
    public userId: number,
    public consoleId: number,
    public shopId: number,
    public favoriteGames: FavoriteGames[]
  ) {}
}

export default UserPreferences
