import Game from "../entities/game.model"
import IItemRepository from "./item.repository"

export interface IGameRepository extends IItemRepository<Game, Number> {}

export default IGameRepository
