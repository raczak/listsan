"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userApi_adapter_1 = __importDefault(require("./adapters/driven/userApi.adapter"));
const gameApi_adapter_1 = __importDefault(require("./adapters/driven/gameApi.adapter"));
const game_adapter_1 = __importDefault(require("./adapters/driving/game.adapter"));
const user_adapter_1 = __importDefault(require("./adapters/driving/user.adapter"));
const main_1 = __importDefault(require("./core/main"));
class AppService {
    constructor() {
        // 1. Instantiate right-side adapter(s) ("I want to go outside the hexagon")
        const rawgApiAdapter = new gameApi_adapter_1.default();
        // const mockApiAdapter: IObtainGamesPort = new MockApiAdapter(file.json)
        const firebaseAdapter = new userApi_adapter_1.default();
        // 2. Instantiate the hexagon
        this.listSan = new main_1.default(rawgApiAdapter, firebaseAdapter);
        // 3. Instantiate the left-side adapter(s) ("I want ask/to go inside the hexagon")
        // Dois être refacto pour instancier l'ui en 1 seul appel en faisant passer mes 2 adapters et le ListSan
        // Exposer ici les features que je veux soumettre à l'UI ?
    }
    // 4. Instantiate left-side adapter(s) ("I want ask/to go inside the hexagon")
    // Les instances API sont exposées, pour une utilisation dans un framework front
    getGameAdapterInstance() {
        const nativeUIGameAdapter = new game_adapter_1.default(this.listSan);
        return nativeUIGameAdapter;
    }
    getUserdapterInstance() {
        const nativeUIUserAdapter = new user_adapter_1.default(this.listSan);
        return nativeUIUserAdapter;
    }
}
exports.default = AppService;
