import Game from "../../entities/game.model"
import Shop from "../../entities/shop.model"
import IGameRepository from "../../repositories/game.repository"

// Faire le execute, save
export class GetCheapestGamePrices {
  constructor(
    public id: number,
    public game: Game,
    public shop: Shop,
    public price: number,
    public createdAt: Date,
    public updatedAt: Date,
    public repository: IGameRepository
  ) {
    this.repository = repository
  }
  // Faire ici la comparaison entre les prix du jeu pour chaque boutique et renvoyer les 5 plus petits prix
  // Example: Get all games called "god of war" from all shops and return an array of 5 cheapest games
  async getCheapestGamePrices(gameId: number, shopId: number) {
    let allGameList = await this.repository.getAll()
    return this.orderCheapestGamesPrices(allGameList)
    //return db("cheapest_game_prices").where({ gameId, shopId }).first()
  }

  orderCheapestGamesPrices(games: Game[]) {
    /*games.sort((a, b) => a.price - b.price)
    return games.slice(0, 5)*/
  }
}
