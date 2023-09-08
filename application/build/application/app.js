"use strict";
/* The AppService class is responsible for instantiating adapters and the ListSan hexagon, and provides
methods to get instances of left-side adapters for fetching games and users. */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userApi_adapter_1 = __importDefault(require("./adapters/driven/userApi.adapter"));
const gameApi_adapter_1 = __importDefault(require("./adapters/driven/gameApi.adapter"));
const game_adapter_1 = __importDefault(require("./adapters/driving/game.adapter"));
const user_adapter_1 = __importDefault(require("./adapters/driving/user.adapter"));
const main_1 = __importDefault(require("./core/main"));
const api_config_1 = require("./api.config");
class AppService {
    constructor(apiConfigKey) {
        // 1. Instantiate right-side adapter(s) ("I want to go outside the hexagon")
        // const rawgApiAdapter: IObtainGamesPort = new GameApiAdapter(
        //   this.apiConfigIGDB
        // )
        this.apiConfig = api_config_1.apiConfigurations[apiConfigKey];
        const gameAPIAdapter = this.createGamesPort();
        // const mockApiAdapter: IObtainGamesPort = new MockApiAdapter(file.json)
        const firebaseAdapter = new userApi_adapter_1.default();
        // 2. Instantiate the hexagon
        this.listSan = new main_1.default(gameAPIAdapter, firebaseAdapter);
        // 3. Instantiate the left-side adapter(s) ("I want ask/to go inside the hexagon")
        // Dois être refacto pour instancier l'ui en 1 seul appel en faisant passer mes 2 adapters et le ListSan
        // Exposer ici les features que je veux soumettre à l'UI ?
    }
    // 4. Instantiate left-side adapter(s) ("I want ask/to go inside the hexagon")
    // Les instances API sont exposées, pour une utilisation dans un framework front
    /* The `getGameAdapterInstance()` method returns an instance of the `NativeUIGameAdapter` class,
    which is a left-side adapter for fetching games. It takes an instance of the `ListSan` class as a
    parameter and returns the created adapter. */
    getGameAdapterInstance() {
        const nativeUIGameAdapter = new game_adapter_1.default(this.listSan);
        return nativeUIGameAdapter;
    }
    /* The `getUserdapterInstance()` method returns an instance of the `NativeUIUserAdapter` class, which
    is a left-side adapter for fetching users. It takes an instance of the `ListSan` class as a
    parameter and returns the created adapter. */
    getUserdapterInstance() {
        const nativeUIUserAdapter = new user_adapter_1.default(this.listSan);
        return nativeUIUserAdapter;
    }
    /**
     * The function creates a games port by instantiating a GameApiAdapter with the provided apiConfig.
     * @returns The method `createGamesPort` is returning an instance of `GameApiAdapter` with the
     * `apiConfig` passed as a parameter.
     */
    createGamesPort() {
        return new gameApi_adapter_1.default(this.apiConfig);
    }
}
exports.default = AppService;
