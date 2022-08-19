import Console from "../../entities/console.model"

export interface FetchConsolesPort {
  getConsoles: () => Promise<Console[]>
  getConsolesById: (id: string) => Promise<Console[]>
}

export default FetchConsolesPort
