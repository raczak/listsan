import GameApiAdapter from "../infrastructure/rawg.io/adapters/gameApi.adapter"
import NativeUIGameAdapter from "../clients/native/listsan-react-native/src/adapters/game.adapter"
import NativeUIUserAdapter from "../clients/native/listsan-react-native/src/adapters/user.adapter"
import IObtainGamesPort from "./ports/server-side/obtainGames.port"
import IObtainUsersPort from "./ports/server-side/obtainUsers.port"
import FetchGamesPort from "./ports/user-side/fetchGames.port"
import FetchUsersPort from "./ports/user-side/fetchUsers.port"
import ListSan from "./core/main"
// import UserApiAdapter2 from "@lib/adapters/user.adapter"
import UserApiAdapter from "../infrastructure/firebase/adapters/userApi.adapter"

class AppService {
  static Main(): void {
    // 1. Instantiate right-side adapter(s) ("I want to go outside the hexagon")
    const rawgApiAdapter: IObtainGamesPort = new GameApiAdapter()
    //const mockApiAdapter: IObtainGamesPort = new MockApiAdapter(file.json)
    const firebaseAdapter: IObtainUsersPort = new UserApiAdapter()

    // 2. Instantiate the hexagon
    const listSan: ListSan = new ListSan(rawgApiAdapter, firebaseAdapter)

    // 3. Instantiate the left-side adapter(s) ("I want ask/to go inside the hexagon")
    // Dois être refacto pour instancier l'ui en 1 seul appel en faisant passer mes 2 adapters et le ListSan
    // Exposer ici les features que je veux soumettre à l'UI ?
    //const nativeUIGlobalAdapter: GlobalAdapter = new NativeUIGlobalAdapter(new NativeUIGameAdapter(), new NativeUIUserAdapter(), listSan)
    const nativeUIGameAdapter: FetchGamesPort = new NativeUIGameAdapter(listSan)
    const nativeUIUserAdapter: FetchUsersPort = new NativeUIUserAdapter(listSan)

    //var consoleAdapter = new ConsoleAdapter(poetryReader);
  }
}

AppService.Main()
