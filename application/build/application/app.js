"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gameApi_adapter_1 = __importDefault(require("../infrastructure/rawg.io/adapters/gameApi.adapter"));
const game_adapter_1 = __importDefault(require("../clients/native/listsan-react-native/src/adapters/game.adapter"));
const user_adapter_1 = __importDefault(require("../clients/native/listsan-react-native/src/adapters/user.adapter"));
const main_1 = __importDefault(require("./core/main"));
// import UserApiAdapter2 from "@lib/adapters/user.adapter"
const userApi_adapter_1 = __importDefault(require("../infrastructure/firebase/adapters/userApi.adapter"));
class AppService {
    static Main() {
        // 1. Instantiate right-side adapter(s) ("I want to go outside the hexagon")
        const rawgApiAdapter = new gameApi_adapter_1.default();
        //const mockApiAdapter: IObtainGamesPort = new MockApiAdapter(file.json)
        const firebaseAdapter = new userApi_adapter_1.default();
        // 2. Instantiate the hexagon
        const listSan = new main_1.default(rawgApiAdapter, firebaseAdapter);
        // 3. Instantiate the left-side adapter(s) ("I want ask/to go inside the hexagon")
        // Dois être refacto pour instancier l'ui en 1 seul appel en faisant passer mes 2 adapters et le ListSan
        // Exposer ici les features que je veux soumettre à l'UI ?
        //const nativeUIGlobalAdapter: GlobalAdapter = new NativeUIGlobalAdapter(new NativeUIGameAdapter(), new NativeUIUserAdapter(), listSan)
        const nativeUIGameAdapter = new game_adapter_1.default(listSan);
        const nativeUIUserAdapter = new user_adapter_1.default(listSan);
        //var consoleAdapter = new ConsoleAdapter(poetryReader);
    }
}
AppService.Main();
