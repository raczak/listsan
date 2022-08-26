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
exports.FavoriteGamesFeature = void 0;
class FavoriteGamesFeature {
    constructor(favoriteGamesRepository, user) {
        this.favoriteGamesRepository = favoriteGamesRepository;
        this.user = user;
    }
    getFavoriteGames() {
        return __awaiter(this, void 0, void 0, function* () {
            const favoriteGames = yield this.favoriteGamesRepository.provideFavoriteGamesByUserId(this.user.id).catch((err) => {
                throw new Error(err);
            });
            return favoriteGames;
        });
    }
    removeFavoriteGames(favoriteGamesToRemove, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const favoriteGames = yield this.favoriteGamesRepository.provideFavoriteGamesByUserId(user.id);
            const favoriteGamesToRemoveIds = favoriteGamesToRemove.map((game) => game.id);
            const favoriteGamesToKeep = favoriteGames.filter((game) => !favoriteGamesToRemoveIds.includes(game.id));
            yield this.favoriteGamesRepository.update(favoriteGamesToKeep, user.id);
        });
    }
    addFavoriteGames(favoriteGamesToAdd, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const favoriteGames = yield this.favoriteGamesRepository.provideFavoriteGamesByUserId(user.id);
            const favoriteGamesToUpdate = [...new Set([...favoriteGames, ...favoriteGamesToAdd])];
            yield this.favoriteGamesRepository.update(favoriteGamesToUpdate, user.id);
        });
    }
}
exports.FavoriteGamesFeature = FavoriteGamesFeature;
