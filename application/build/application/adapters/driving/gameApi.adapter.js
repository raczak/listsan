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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
// import AuthService from '../services/auth'
class GameApiAdapter {
    constructor() { }
    getFavoriteGames() {
        throw new Error('Method not implemented.');
    }
    removeFavoriteGames(favoriteGamesToRemove, user) {
        throw new Error('Method not implemented.');
    }
    addFavoriteGames(favoriteGamesToAdd, user) {
        throw new Error('Method not implemented.');
    }
    getBestps5Games() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('lololo');
            const token = '1e1e4261198043149952843804fbbf66';
            // await AuthService.getToken()
            const headers = {
                Authorization: `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*'
            };
            const response = yield axios_1.default.get(`https://api.rawg.io/api/games?platforms=24`, { headers });
            console.log(response);
            return response.data.results;
        });
    }
}
exports.default = GameApiAdapter;
