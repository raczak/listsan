import Game from "../entities/game.model"
import User from "../entities/user.model"
import IItemRepository from "./item.repository"

export interface IFavoriteGamesRepository extends IItemRepository<Game, Number> {
  provideFavoriteGamesByUserId: (userId: number) => Promise<Game[]>
}
