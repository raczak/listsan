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
    constructor(apiConfig) {
        this.access_token = '';
        this.client_id = '';
        this.apiConfig = apiConfig;
        this.corsAPIURL = '';
    }
    getFavoriteGames() {
        return __awaiter(this, void 0, void 0, function* () {
            this.access_token = '';
            this.client_id = '';
            this.corsAPIURL = '';
            // Code ici
        });
    }
    removeFavoriteGames(favoriteGamesToRemove, user) {
        return __awaiter(this, void 0, void 0, function* () {
            this.access_token = '';
            this.client_id = '';
            this.corsAPIURL = '';
        });
    }
    addFavoriteGames(favoriteGamesToAdd, user) {
        return __awaiter(this, void 0, void 0, function* () {
            this.access_token = '';
            this.client_id = '';
            this.corsAPIURL = '';
        });
    }
    getBestps5Games() {
        return __awaiter(this, void 0, void 0, function* () {
            const { accessTokenURL, dataAPIURL, dataFields, authHeaders, corsAPIURL } = this.apiConfig;
            const tokenResponse = yield axios_1.default.post(accessTokenURL || '');
            this.access_token = tokenResponse.data.access_token;
            this.client_id = authHeaders['Client-ID'];
            this.corsAPIURL = corsAPIURL;
            const response = yield axios_1.default.post(corsAPIURL, {
                accessTokenURL,
                dataAPIURL,
                dataFields,
                authHeaders: {
                    Authorization: `Bearer ${this.access_token}`,
                    'Client-ID': this.client_id
                }
            });
            return response.data.results;
        });
    }
}
exports.default = GameApiAdapter;
