import Console from "../entities/console.model"
import IItemRepository from "./item.repository"

export interface ConsoleRepository extends IItemRepository<Console, Number> {}
