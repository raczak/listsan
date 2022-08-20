export class CheapestGamePrices {
  constructor(
    public id: number,
    public gameId: number,
    public shopId: number,
    public price: number,
    public createdAt: Date,
    public updatedAt: Date
  ) {}

  function getCheapestGamePrices(gameId: number, shopId: number) {
    return db('cheapest_game_prices')
      .where({ gameId, shopId })
      .first()
  }
}
  