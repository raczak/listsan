import Game from '../entities/game.model'
import IItemRepository from './item.repository'

export default interface IGameRepository extends IItemRepository<Game, Number> {
    
}
