"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCheapestGamePrices = void 0;
// Faire le execute, save
class GetCheapestGamePrices {
    constructor(id, game, shop, price, createdAt, updatedAt, repository) {
        this.id = id;
        this.game = game;
        this.shop = shop;
        this.price = price;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.repository = repository;
        this.repository = repository;
    }
    // Faire ici la comparaison entre les prix du jeu pour chaque boutique et renvoyer les 5 plus petits prix
    // Example: Get all games called "god of war" from all shops and return an array of 5 cheapest games
    getCheapestGamePrices(gameId, shopId) {
        return __awaiter(this, void 0, void 0, function* () {
            let allGameList = yield this.repository.getAll();
            return this.orderCheapestGamesPrices(allGameList);
            //return db("cheapest_game_prices").where({ gameId, shopId }).first()
        });
    }
    orderCheapestGamesPrices(games) {
        /*games.sort((a, b) => a.price - b.price)
        return games.slice(0, 5)*/
    }
}
exports.GetCheapestGamePrices = GetCheapestGamePrices;
