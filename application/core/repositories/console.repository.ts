import Console from '../entities/console.model'
import IItemRepository from './item.repository'

export type ConsoleRepository = IItemRepository<Console, number>
