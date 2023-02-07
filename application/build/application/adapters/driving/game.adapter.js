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
class GameAdapter {
    constructor(core) {
        if (!core) {
            throw new Error('A ListSan instance is required for GameAdapter');
        }
        this.core = core;
    }
    static getInstance(core) {
        if (!GameAdapter.instance) {
            GameAdapter.instance = new GameAdapter(core);
        }
        return GameAdapter.instance;
    }
    getGames() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.core.gameAdapter) {
                throw new Error('GameAdapter is not implemented in ListSan');
            }
            return this.core.gameAdapter.getBestps5Games();
        });
    }
    getGamesById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.core.gameAdapter) {
                throw new Error('GameAdapter is not implemented in ListSan');
            }
            return this.core.gameAdapter.provideGamesById(id);
        });
    }
}
exports.default = GameAdapter;
