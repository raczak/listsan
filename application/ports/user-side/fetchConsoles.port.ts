import Console from "../../core/entities/console.model"
import IItemRepository from "../../core/repositories/item.repository"

export interface FetchConsolesPort extends IItemRepository<Console, Number> {
  getConsoles: () => Promise<Console[]>
  getConsolesById: (id: string) => Promise<Console[]>
}

export default FetchConsolesPort
